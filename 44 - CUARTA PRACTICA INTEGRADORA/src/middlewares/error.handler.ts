import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse();

export const errorHandler = (error: any) => {
  return httpResponse.ServerError(error?.message);
};
