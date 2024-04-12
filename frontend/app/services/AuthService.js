import axios from "axios";

class AuthService {
  constructor(url) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Request timed out",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(username, password) {
    try {
      const response = await this.instance.post("/login", {
        username,
        password,
      });
      console.log(response);
      return {
        username: response.data.username,
        accessToken: response.data.accessToken,
      };
    } catch (error) {
      return error.response.data;
    }
  }
}
