import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7603b05071e94fbea11696299d07903b",
  },
});
