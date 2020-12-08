const { find } = require('../database/models/product.model');
const { createNewProduct, getProductsFromShop, deleteProductFromId, findProductById } = require('../queries/products.queries');
const { createProductSchema, deleteProductSchema } = require ('../database/validations/product.validation');

// CREATE A NEW PRODUCT
exports.createProduct = async (req, res, next) => {
  // DEBUG
  // console.log("req.user :", req.user);
  const body = req.body;
  const user = req.user;
  try {
    const validate = await createProductSchema.validateAsync(body);
    console.log(validate);
    const newProduct = await createNewProduct(validate, user);
    res.status(200).json({
      message: "Nouveau produit ajouté",
      product: newProduct
    })
  } catch (error) {
    if(error.isJoi === true) error.status = 422;
    res.json({
      errors: error
    });
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
  // console.log(req.params);
  const {productId} = req.params;
  const user = req.user._id;
  try {
    // VALIDATE BODY'S DATA
    const validate = await deleteProductSchema.validateAsync(productId);
    // IF USER'S LOGGED
    if(user) {
      const originalList = await getProductsFromShop(user);
      await deleteProductFromId(validate.productId);
      const newList = await getProductsFromShop(user);
      if (originalList.length > newList.length) {
      // ORIGINAL LIST HAS MORE PRODUCTS THAN NEWLIST (MODIFIED)
        res.status(200).json({
          message: "Le produit a bien été supprimé",
          products: newList
        });
      } else {
      // ORIGINAL LIST & NEW LIST ARE THE SAME (NO MODIFICATION)
        res.status(304).json({
          message: "Une erreur est survenue, le produit n'a pas été supprimé",
          products: originalList
        });
      }
    // IF USER'S NOT LOGGED
    } else {
      res.status(403).json({
        message: "Vous n'êtes pas autorisé à effectuer cette action, veuillez vous connecter"
      });
    }
  } catch (error) {
    if(error.isJoi === true) error.status = 422;
    res.json({
      errors: error
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  const body = req.body;
  const user = req.user;
  try {
    // USER'S LOGGED
    if(user) {
      const product = await findProductById(body._id);
      // PRODUCT FOUND
      if(product) {
        const updatedProduct = await updateNewProduct(body);
        const updatedList = await getProductsFromShop(user._id)
        res.status(200).json({
          message: "Produit modifié avec succès",
          updatedProduct: updatedProduct,
          products: updatedList
        });
      // PRODUCT NOT FOUND
      } else {
        res.status(403).json({
          message: "Aucun produit n'a été trouvé. Veuillez modifier un produit existant"
        });
      }
    // USER'S NOT LOGGED
    } else {
      res.status(403).json({
        message: "Vous n'êtes pas autorisé à effectuer cette action, veuillez vous connecter"
      });
    }
    
  } catch (error) {
    res.json({
      erreurs: error
    });
  }
};