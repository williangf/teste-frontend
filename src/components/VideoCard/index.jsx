import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScroll } from "@contexts/scroll";
import Button from "@components/Button";
import Container from "./styles";

export default function VideoCard({ videoData }) {
  const router = useRouter();
  const { setScrollPosition } = useScroll();

  function handleClick(href) {
    setScrollPosition(window.pageYOffset);
    router.push(href);
  }

  return (
    <Container>
      <div className="thumbnail">
        <Image
          src={videoData.snippet.thumbnails.medium.url}
          layout="fill"
          alt={videoData.snippet.title}
        />
      </div>
      <h1
        className="video-title"
        title={videoData.snippet.title}
      >
        {videoData.snippet.title}
      </h1>
      <p className="channel-title">{videoData.snippet.channelTitle}</p>
      <p className="video-description">{videoData.snippet.description}</p>
      <Button
        className="full-width"
        onClick={() => handleClick(`/video/${videoData.id.videoId}`)}
      >
        Ver detalhes
      </Button>
    </Container>
  )
}