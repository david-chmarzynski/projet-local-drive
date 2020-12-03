const { createProduct, getProductsFromShop } = require('../queries/products.queries');

// CREATE A NEW PRODUCT
exports.create = async (req, res, next) => {
  // DEBUG
  // console.log("req.user :", req.user);
  const body = req.body;
  const user = req.user;
  try {
    const newProduct = await createProduct(body, user);
    res.status(200).json({
      message: "Nouveau produit ajouté",
      product: newProduct
    })
  } catch (error) {
    console.log(error);
  }
};

// GET PRODUCTS FROM A SHOP
exports.getProducts = async (req, res, next) => {
  // DEBUG
  // console.log("req.user :", req.user);
  const user = req.user._id || req.body.user;
  try {
    const products = await getProductsFromShop(user);
    console.log(products)
    res.status(200).json({
      message: "Produits récupérés avec succès",
      products: products
    })
  } catch (error) {
    console.log(error);
  }
};