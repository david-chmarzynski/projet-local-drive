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
  const user = "5fc5234118f96206e0bb72ce";
  try {
    const productsList = await getProductsFromShop(user);
    if (productsList) {
      res.json({
        message: "Produits récupérés avec succès",
        products: productsList
      });
    } else {
      res.json({
        message: "Un problème est survenu"
      });
    }
  } catch (error) {
    console.log(error);
  }
};