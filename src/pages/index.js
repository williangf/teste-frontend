import { useCallback, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useVideos } from "@contexts/videos";
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
  const [searchTerm, setSearchTerm] = useState("");
  const { videos, setVideos, videosList, setVideosList } = useVideos();
  const { scrollPosition, scrollToSavedPosition } = useScroll();

  const loadVideos = useCallback(async (searchTerm, nextPageToken) => {
    setIsLoading(true);

    try {
      const videos = await VideosService.getVideos(searchTerm, nextPageToken);

      setVideos(videos);
      setVideosList((prevState) => [...prevState, ...videos.items]);
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
    if (searchTerm) loadVideos(searchTerm);
  }, [searchTerm, loadVideos]);

  useEffect(() => {
    if (videos && videos.nextPageToken && isPageBottom && !isLoading) {
      loadVideos(searchTerm, videos.nextPageToken);
    }
  }, [isPageBottom, searchTerm, videos, loadVideos, isLoading]);

  return (
    <PageContainer title="Home">
      <Container>
        <SearchBar
          isLoading={isLoading}
          setSearchTerm={setSearchTerm}
          isSearchTermFilled={!!searchTerm || !!videosList.length}
        />
        {error && !isLoading && (
          <div className="videos-list-error fade">
            <DisplayMessage
              message="Houve um erro na pesquisa"
              icon={<TbMoodSad size={124} />}
            />
          </div>
        )}
        {videosList && (
          <div className="videos-list fade row">
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
