import RestService from "./api/RestService";

const url = process.env.NEXT_PUBLIC_API_URL;
const key = process.env.NEXT_PUBLIC_API_KEY;

class VideosService {
  constructor() {
    this.restService = new RestService(url);
  }

  async getVideos(searchTerm, nextPageToken) {
    const { data } = await this.restService.get("/search", {
      params: {
        key,
        part: "id,snippet",
        q: searchTerm,
        maxResults: 10,
        pageToken: nextPageToken,
        type: "video",
      },
    });

    return data;
  }

  async getVideo(videoId) {
    const { data } = await this.restService.get("/videos", {
      params: {
        key,
        part: "snippet,statistics",
        id: videoId,
      },
    });

    return data;
  }
}

export default new VideosService();
