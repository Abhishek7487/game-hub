import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd7d4a4380934643b3fd6e640929663a",
  },
});
