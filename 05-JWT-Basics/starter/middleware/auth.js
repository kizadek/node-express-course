const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;
const UnauthenticatedError = require("../errors/unauthenticated");

const authenticationMiddleware = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  //console.log(authorizationHeader);
  if (!authorizationHeader || authorizationHeader === "undefined") {
    throw new UnauthenticatedError("NOT AUTHORIZED");
  }
  const token = authorizationHeader.split(" ")[1];
  //console.log(token);

  try {
    const decoded = await jwt.verify(token, jwt_secret);
    //console.log(decoded);
    req.decoded = decoded;
    next();
  } catch (error) {
    throw new UnauthenticatedError("NOT AUTHORIZED!!");
  }
};

module.exports = {
  authenticationMiddleware,
};
