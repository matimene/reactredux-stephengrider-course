import axios from "axios";

const KEY = "AIzaSyCNCwzNIQ0utnZF1hQnx-iLHmxX9jpCh40";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
