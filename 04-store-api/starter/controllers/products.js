const Products = require("./../models/product")

// @desc Get All Products Static
// @route /api/v1/stores/productsStatic
// @access public

const getAllProductsStatic = async(req,res,next)=>{
    //console.log(Products)
   // throw("testing express async errors")
   const search = 'a'
   
   const products = await Products.find({name:{$regex:search,$options: 'i'}})
    return res.status(200).json({products,nbHits:products.length})
}


// @desc Get All Products
// @route /api/v1/stores/products
// @access public

const getAllProducts = async(req,res,next)=>{
    const {featured,company, name} = req.query;
    const queryObject = {}
    //if we have featured in the query
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    //if we have company
    if(company){
        queryObject.company = company
    }
    //if we have name 
    if(name){
        queryObject.name = {$regex:name,$options:'i'}
    }
const products = await Products.find(queryObject)
    console.log(req.query)
    return res.status(200).send({nbHits:products.length,products})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}