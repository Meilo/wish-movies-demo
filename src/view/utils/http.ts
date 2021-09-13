import axios from "axios";

export default class Http {
  get(url: string) {
    return axios.get(url);
  }
}
