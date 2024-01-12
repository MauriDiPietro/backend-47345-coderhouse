import axios from "axios";

export const httpRequest = async (
  method,
  endpoint,
  headers,
  data
) => {
  const query = {
    headers,
    data,
  };
  let response = "";
  switch (method) {
    case "post":
      response = await axios.post(endpoint, query);
      break;
    case "put":
      response = await axios.put(endpoint, query);
      break;
    case "delete":
      response = await axios.delete(endpoint, query);
      break;
    default:
      response = await axios.get(endpoint, query);
  }
  return response;
};
