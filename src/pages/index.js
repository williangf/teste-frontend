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
import Container from "@styles/pages/home";
import { TbMoodSad } from "react-icons/tb";
import Loading from "@components/Loading";

export default function Home() {
  const isPageBottom = usePageBottom();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    searchTerm,
    setSearchTerm,
    videos,
    setVideos,
    videosList,
    setVideosList,
    resetSearch,
  } = useVideosSearch();
  const { scrollPosition, scrollToSavedPosition } = useScroll();

  const loadVideos = useCallback(async (searchTerm, nextPageToken) => {
    setIsLoading(true);

    try {
      const videos = await VideosService.getVideos(searchTerm, nextPageToken);

      setVideos(videos);
      setVideosList((prevState) => [...prevState, ...videos.items]);
      setError("");
    } catch (error) {
      setError("Houve um erro ao carregar os vídeos");
    } finally {
      setIsLoading(false);
    }
  }, [setVideos, setVideosList]);

  useEffect(() => {
    if (scrollPosition > 0) scrollToSavedPosition();
  }, [scrollPosition, scrollToSavedPosition]);

  useEffect(() => {
    if (videos && videos.nextPageToken && isPageBottom && !isLoading && !error) {
      loadVideos(searchTerm, videos.nextPageToken);
    }
  }, [isPageBottom, searchTerm, videos, loadVideos, isLoading, error]);

  function updateSearchTerm(newSearchTerm) {
    if (!newSearchTerm || newSearchTerm === searchTerm) return false;

    resetSearch();
    loadVideos(newSearchTerm);
    setSearchTerm(newSearchTerm);
  }

  return (
    <PageContainer title="Home">
      <Container isSearchTermFilled={!!searchTerm || !!videosList.length}>
        <SearchBar
          isLoading={isLoading}
          isSearchTermFilled={!!searchTerm || !!videosList.length}
          updateSearchTerm={updateSearchTerm}
        />
        {error && !isLoading && (
          <div className="videos-list-message fade">
            <DisplayMessage
              message={error}
              icon={<TbMoodSad size={124} />}
            />
          </div>
        )}
        {!error && videos && videosList.length === 0 && !isLoading && (
          <div className="videos-list-message fade">
            <DisplayMessage
              message={"Não encontramos vídeos com o termo buscado"}
              icon={<TbMoodSad size={124} />}
            />
          </div>
        )}
        {!error && (videosList.length || isLoading) > 0 && (
          <div className="videos-list row">
            {videosList.map((video, index) => (
              <VideoCard key={video.id.videoId + index} videoData={video} />
            ))}
            {isLoading && <>
              <Loading />
              <Loading />
              <Loading />
            </>}
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
