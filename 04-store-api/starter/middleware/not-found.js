const notFoundMiddleware= (req,res)=> res.status(404).send('Route Not Found!!')

module.exports = notFoundMiddleware;