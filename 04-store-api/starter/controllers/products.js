const Products = require("./../models/product");

// @desc Get All Products Static
// @route /api/v1/stores/productsStatic
// @access public

const getAllProductsStatic = async (req, res, next) => {
  //console.log(Products)
  // throw("testing express async errors")
  const name = "-price";

  const products = await Products.find({}).sort(name);
  return res.status(200).json({ products, nbHits: products.length });
};

// @desc Get All Products
// @route /api/v1/stores/products
// @access public

const getAllProducts = async (req, res, next) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  //if we have featured in the query
  // find by fetured
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  //if we have company
  // find by company
  if (company) {
    queryObject.company = company;
  }

  //if we have name
  // find by name or close murch
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Products.find(queryObject);
  //sconsole.log(result);
  // if we have sort, sort results by sort value else by createdAt
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdA");
  }
  // if filels  then return only what is in the fields as a respons
  if (fields) {
    //  const fileldList = fields.split(",").join(" ");
    console.log(fields);
    const fieldsList = fields.split(",").join(" ");
    console.log(fieldsList);
    result = result.select(fieldsList);
  }

  const products = await result;
  //console.log(req.query);
  return res.status(200).send({ nbHits: products.length, products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
