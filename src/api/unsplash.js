import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XBilJVWH9HIqNIEZaIl2rSjCS8EhVoW-rx7CniLFGoE",
  },
});
