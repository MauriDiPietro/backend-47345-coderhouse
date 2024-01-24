import { HttpResponse } from "./http.response.js"
const httpResponse = new HttpResponse();

export const errorHandler = (error, req, res, next) => {
    console.log( `error ${error.message}`) 
    return httpResponse.NotFound(res, error.message)
}