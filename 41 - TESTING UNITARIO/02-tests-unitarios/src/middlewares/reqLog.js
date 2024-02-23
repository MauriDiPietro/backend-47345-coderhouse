import { logger } from "../logs/news.logs.js";

export const reqLog = (req, res, next) => {
    logger.info(req.method, req.url);
    next();
}