export const createResponse = (res, statusCode, data) => {
    return res.status(statusCode).json({data})
}