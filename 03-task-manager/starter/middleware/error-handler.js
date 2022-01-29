const errorHandlreMiddleware = (err,req,res,next) =>{
  console.log(`ERROR:: ${err}`)
  return res.status(err.status).json({
    success: false,
    msg:`sorry ${err.message}!!`,
    status:err.status
  })
}


module.exports= errorHandlreMiddleware