import axios from "axios";

const apiKey = "Ip5A1MvTpuHHH5z2J3qUqeuYMpGW--rQeu7x6R-KQs4";
axios.defaults.baseURL = "https://api.u123nsplash.com";

export const searchImages = async (query, page = 1, perPage = 10) => {
  return await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
  });
};
