const { createProduct } = require('../queries/products.queries');

// CREATE A NEW PRODUCT
exports.create = async (req, res, next) => {
  // DEBUG
  console.log(req.body);
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