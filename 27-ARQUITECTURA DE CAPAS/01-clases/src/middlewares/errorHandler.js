export const errorHandler = (error, req, res, next) => {
    console.log( `error ${error.message}`) 
    const status = error.status
    res.status(status).send(error.message)
}