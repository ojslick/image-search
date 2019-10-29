import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8db2c524eb40e3f4498fdd69c48c84cb486266328281ae855e819634da2c71ae"
  }
});
