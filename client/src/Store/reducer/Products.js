// PRODUCTS REDUCER

// INITIAL APP STATE
const initialState = {
  name: null,
  description: null,
  price: null,
  stock: null,
  image: null,
  category: null,
  unit: null,
  products: [],
};

// ACTIONS TYPES
const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";
const CHANGE_PRICE = "CHANGE_PRICE";
const CHANGE_STOCK = "CHANGE_STOCK";
const CHANGE_IMAGE = "CHANGE_IMAGE";
const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const CHANGE_UNIT = "CHANGE_UNIT";
const CHANGE_PRODUCTS = "CHANGE_PRODUCTS";

// ACTIONS TYPES MIDDLEWARE
export const SUBMIT_PRODUCT = "SUBMIT_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// REDUCER
const reducer = (state = initialState, action={}) => {
  switch(action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.description
      }
    case CHANGE_PRICE:
      return {
        ...state,
        price: action.price
      }
    case CHANGE_STOCK:
      return {
        ...state,
        stock: action.stock
      }
    case CHANGE_IMAGE:
      return {
        ...state,
        image: action.image
      }
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    case CHANGE_UNIT:
      return {
        ...state,
        unit: action.unit
      }
    case CHANGE_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    default:
      return state;
  }
};

// ACTION CREATOR
export const changeNameProductAdd = (name) => ({
  type: CHANGE_NAME,
  name
});

export const changeDescriptionProductAdd = (description) => ({
  type: CHANGE_DESCRIPTION,
  description
});

export const changePriceProductAdd = (price) => ({
  type: CHANGE_PRICE,
  price
});

export const changeStockProductAdd = (stock) => ({
  type: CHANGE_STOCK,
  stock
});

export const changeImageProductAdd = (image) => ({
  type: CHANGE_IMAGE,
  image
});

export const changeCategoryProductAdd = (category) => ({
  type: CHANGE_CATEGORY,
  category
});

export const changeUnitProductAdd = (unit) => ({
  type: CHANGE_UNIT,
  unit
});

export const submitProductAdd = () => ({
  type: SUBMIT_PRODUCT
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const changeProducts = (products) => ({
  type: CHANGE_PRODUCTS,
  products
});

export default reducer;