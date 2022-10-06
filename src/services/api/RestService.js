import axios from "axios";

class RestService {
  constructor(baseURL = process.env.NEXT_PUBLIC_BACKEND_API) {
    this.api = axios.create({
      baseURL,
    });
  }

  async get(path, params) {
    const response = this.api.get(path, params);

    return response;
  }

  async post(path, body, params) {
    const response = await this.api.post(path, body, params);

    return response;
  }

  async put(path, body, params) {
    const response = await this.api.put(path, body, params);

    return response;
  }

  async delete(path, body, params) {
    const response = await this.api.delete(path, body, params);

    return response;
  }
}

export default RestService;
