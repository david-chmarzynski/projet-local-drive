USERS: id (string), firstname (string), lastname (string), email (string), password (string), isShop (Boolean), location_id (string FK), date_created (datetime), date_updated (datetime)
LOCATION: id (string),adress (string), city_name (string),country (string), zip_code (int), date_created (datetime), date_updated (datetime)
SHOPS: id (string), name (string), email (string), password (string), location_id (string FK), isShop (Boolean), date_created (datetime), date_updated (datetime)

PRODUCTS: id (string), category_id (string), name (string), description (string), price (int), unit (string), stock (int), shop_id (string FK), image (string), date_created (datetime), date_updated (datetime), date_deleted (datetime)

CART: id (string), user_id (string FK), products ([product_ids]), date_created (datetime), date_updated (datetime)

CATEGORY: id (string), category_name (string), color_id (string FK), date_created (datetime), date_updated (datetime)

COLOR: id (string), hexa_code (string), date_created (datetime), date_updated (datetime)