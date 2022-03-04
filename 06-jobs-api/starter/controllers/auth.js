/*
METHOD [POST] 
ENDPOINT /api/v1/register
Status:: Protected
*/
const register = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "user registered",
  });
};

/*
METHOD [POST] 
ENDPOINT /api/v1/login
Status:: Public
*/
const login = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "you are logged-in",
  });
};

module.exports = {
  register,
  login,
};
