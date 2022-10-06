import RestService from "./api/RestService";

const url = process.env.NEXT_PUBLIC_API_URL;
const key = process.env.NEXT_PUBLIC_API_KEY;

class VideosService {
  constructor() {
    this.restService = new RestService(url);
  }

  async getVideos(searchTerm) {
    const { data } = await this.restService.get("", {
      params: {
        key,
        part: "id,snippet",
        q: searchTerm,
        maxResults: 10,
      },
    });

    console.log(123, data);

    return data;
  }
}

export default new VideosService();
