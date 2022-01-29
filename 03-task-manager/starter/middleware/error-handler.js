
const {CustomAPIError} = require("./../errors/custom-errors");

const errorHandlreMiddleware = (err,req,res,next) =>{
  if(err instanceof CustomAPIError){
    return res.status(err.statusCode).json({
      success: true,
      msg: `${err.message}`
    })
  }
  console.log(`ERROR:: ${err}`)
  return res.status(500).json({
    success: false,
    msg:`sorry there was a problem, try agian!!`,
    status:err.status
  })
}


module.exports= errorHandlreMiddleware