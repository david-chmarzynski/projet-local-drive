const { createProduct, getProductsFromShop, deleteProductFromId } = require('../queries/products.queries');

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
    if (products) {
      res.status(200).json({
        message: "Produits récupérés avec succès",
        products: products
      });
    } else {
      res.status(200).json({
        message: "Il n'y a aucun produit",
        products: []
      });
    }

  } catch (error) {
    res.json({
      errors: error
    })
  }
};

exports.deleteProduct = async (req, res, next) => {
  // DEBUG
  console.log(req.body);
  const productId = req.body.productId;
  const user = req.user._id;
  console.log(productId);
  try {
    // IF USER'S LOGGED
    if(user) {
      const originalList = await getProductsFromShop(user);
      await deleteProductFromId(productId);
      const newList = await getProductsFromShop(user);
      if (originalList.length > newList.length) {
      // ORIGINAL LIST HAS MORE PRODUCTS THAN NEWLIST
        res.status(200).json({
          message: "Le produit a bien été supprimé",
          products: newList
        });
      } else {
      // ORIGINAL LIST & NEW LIST ARE THE SAME
        res.status(304).json({
          message: "Une erreur est survenue, le produit n'a pas été supprimé",
          product: originalList
        });
      }
    // IF USER'S NOT LOGGED
    } else {
      res.status(403).json({
        message: "Vous n'êtes pas autorisé à effectuer cette action, veuillez vous connecter"
      });
    }
  } catch (error) {
    console.log(error)
  }
};