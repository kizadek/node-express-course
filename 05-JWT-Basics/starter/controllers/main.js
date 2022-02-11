const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  console.log("login");
};

const dashboard = async (req, res) => {
  console.log("dashboard");
};

module.exports = {
  login,
  dashboard,
};
