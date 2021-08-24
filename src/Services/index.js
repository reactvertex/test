import Axios from "axios";

export default function axios(method, url, data) {
  let URL =  url;
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "POST") {
    return Axios.post(URL, data, config);
  } else if (method === "GET") {
    return Axios.get(URL, config);
  } else if (method === "PUT") {
    return Axios.put(URL, data, config);
  }
}
