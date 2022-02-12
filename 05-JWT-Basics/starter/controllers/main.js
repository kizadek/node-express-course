const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const jwt_secret = process.env.JWT_SECRET;
const login = async (req, res) => {
  //console.log(jwt_secret);
  const { username, password } = req.body;

  if (!username || !password)
    throw new CustomAPIError("name and password are required!", 400);
  const id = new Date().getDate();
  //console.log(id);
  const token = await jwt.sign({ id, username }, jwt_secret, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "token created successfully", token });
};

const dashboard = async (req, res) => {
  console.log("dashboard");
};

module.exports = {
  login,
  dashboard,
};
