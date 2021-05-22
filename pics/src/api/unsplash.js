import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XqzpXO-xV5gU4zMF3VVuPK95oGLTifyGOZPJ04WTGdw",
  },
});
