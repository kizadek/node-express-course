

// @desc Get All Products Static
// @route /api/v1/stores/productsStatic
// @access public

const getAllProductsStatic = async(req,res,next)=>{
    console.log('static')
    throw("testing express async errors")
    return res.status(200).send('STATIC')
}


// @desc Get All Products
// @route /api/v1/stores/products
// @access public

const getAllProducts = async(req,res,next)=>{
    console.log('products')
    return res.status(200).send('PRODUCTS')
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}