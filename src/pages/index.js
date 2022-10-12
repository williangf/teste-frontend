import { useCallback, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useVideosSearch } from "@contexts/videosSearch";
import { useScroll } from "@contexts/scroll";
import usePageBottom from "@hooks/usePageBottom";
import VideosService from "@services/VideosService";
import PageContainer from "@components/PageContainer";
import SearchBar from "@components/SearchBar";
import DisplayMessage from "@components/DisplayMessage";
import VideoCard from "@components/VideoCard";
import Loading from "@components/Loading";
import Container from "@styles/pages/home";
import { TbMoodSad } from "react-icons/tb";

export default function Home() {
  const isPageBottom = usePageBottom();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { searchTerm, setSearchTerm, videosResult, setVideosResult } =
    useVideosSearch();
  const { scrollPosition, scrollToSavedPosition } = useScroll();
  const [initialPosition, setInitialPosition] = useState(!searchTerm);

  const loadVideos = useCallback(
    async (searchTerm, currentNextPageToken) => {
      setIsLoading(true);

      try {
        const videosReturn = await VideosService.getVideos(
          searchTerm,
          currentNextPageToken
        );

        const { etag, items, nextPageToken } = videosReturn;

        setVideosResult((prevState) => {
          return {
            etag,
            nextPageToken,
            items: [...prevState.items, ...items],
          };
        });
        setError("");
      } catch (error) {
        setError("Houve um erro ao carregar os vídeos");
      } finally {
        setIsLoading(false);

        if (initialPosition) {
          setTimeout(() => {
            setInitialPosition(false);
          }, 800);
        }
      }
    },
    [setVideosResult, initialPosition]
  );

  useEffect(() => {
    if (scrollPosition > 0) scrollToSavedPosition();
  }, [scrollPosition, scrollToSavedPosition]);

  useEffect(() => {
    if (
      videosResult &&
      videosResult.nextPageToken &&
      isPageBottom &&
      !isLoading &&
      !error
    ) {
      loadVideos(searchTerm, videosResult.nextPageToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageBottom]);

  function updateSearchTerm(newSearchTerm) {
    if (!newSearchTerm || newSearchTerm === searchTerm) return false;

    setVideosResult({
      items: [],
    });
    setSearchTerm(newSearchTerm);
    loadVideos(newSearchTerm);
  }

  return (
    <PageContainer title="Home">
      <Container initialPosition={initialPosition}>
        <SearchBar
          isLoading={isLoading}
          isSearchTermFilled={!!searchTerm}
          hasVideosLoaded={!!videosResult.items?.length}
          updateSearchTerm={updateSearchTerm}
        />
        {error && !isLoading && (
          <div className="videos-list-message fade">
            <DisplayMessage message={error} icon={<TbMoodSad size={124} />} />
          </div>
        )}
        {!error &&
          videosResult.etag &&
          videosResult.items?.length === 0 &&
          !isLoading && (
            <div className="videos-list-message fade">
              <DisplayMessage
                message={"Não encontramos vídeos com o termo buscado"}
                icon={<TbMoodSad size={124} />}
              />
            </div>
          )}
        {!error && (
          <div className="videos-list row">
            {videosResult.items?.map((video, index) => (
              <VideoCard key={video.id.videoId + index} videoData={video} />
            ))}
            {isLoading && (
              <>
                <Loading />
                <Loading />
                <Loading />
              </>
            )}
          </div>
        )}
      </Container>
    </PageContainer>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
