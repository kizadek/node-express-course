const errorHandlerMiddleware = (err,req,res,next) =>{
  console.error(`ERORR:::${err}`)
  return res.status(500).json({succss: false,msg:`Sorry something went wrong, please try again`})
}

module.exports = errorHandlerMiddleware
