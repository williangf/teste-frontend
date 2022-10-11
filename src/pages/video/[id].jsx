import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import VideosService from "@services/VideosService";
import PageContainer from "@components/PageContainer";
import Button from "@components/Button";
import Container from "@styles/pages/videoDetails";
import { TbArrowBackUp, TbMoodSad, TbThumbUp } from "react-icons/tb";
import DisplayMessage from "@components/DisplayMessage";
import Loading from "@components/Loading";

export default function VideoDetails() {
  const router = useRouter();
  const { id: videoId } = router.query;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    async function getVideoDetails() {
      setIsLoading(true);

      try {
        const videoDetails = await VideosService.getVideo(videoId);

        setVideoDetails(videoDetails);
        setError("");
      } catch (error) {
        setError("Houve um erro ao pesquisar o vídeo");
      } finally {
        setIsLoading(false);
      }
    }

    if (videoId) getVideoDetails();
  }, [videoId]);

  return (
    <PageContainer title={videoDetails?.items[0]?.snippet.title}>
      <Container>
        <div className="top-container">
          <Link href="/">
            <a>
              <Button className="lighter">
                <TbArrowBackUp size={24} />
              </Button>
            </a>
          </Link>
        </div>
        {isLoading && <Loading bigger />}
        {!isLoading && error && <DisplayMessage
          message={error}
          icon={<TbMoodSad size={124} />}
        />}
        {!isLoading && videoDetails?.items.length === 0 && <DisplayMessage
          message="Vídeo não encontrado"
          icon={<TbMoodSad size={124} />}
        />}
        {!isLoading && videoDetails?.items.length > 0 && <div
          className="details-container fade"
        >
          <h1 className="video-title">
            {videoDetails.items[0].snippet.title}
          </h1>
          <div className="iframe-container">
            <iframe src={`https://www.youtube.com/embed/${videoId}`} />
          </div>
          <div className="bottom-container">
            <div className="main-details">
              <p className="channel-name">
                {videoDetails.items[0].snippet.channelTitle}
              </p>
              <div className="video-likes">
                <TbThumbUp size={24} />
                {videoDetails.items[0].statistics?.likeCount}
              </div>
            </div>
            <div className="description">
              <pre>
                {videoDetails.items[0].snippet.description}
              </pre>
            </div>
            <div className="video-views">
              <span>
                {`${videoDetails.items[0].statistics?.viewCount} visualizações`}
              </span>
            </div>
          </div>
        </div>}
      </Container>
    </PageContainer>
  );
}