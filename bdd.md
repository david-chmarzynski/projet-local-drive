# MCD :

:
USERS: id (string), firstname (string), lastname (string), email (string), password (string), isShop (Boolean), date_created (datetime), date_updated (datetime)
HAS A1, 0N LOCATION, 11 USERS
LOCATION: id (string),adress (string), city_name (string),country (string), zip_code (int), date_created (datetime), date_updated (datetime)
HAS A2, 1N LOCATION, 11 SHOPS
SHOPS: id (string), name (string), email (string), password (string), isShop (Boolean), date_created (datetime), date_updated (datetime)

:
BELONGS TO, 11 USERS, 11 CART
:
CART: id (string), products (array), date_created (datetime), date_updated (datetime)
:
SELLS, 11 SHOPS, 0N PRODUCTS

:
IS FILLED WITH, 0N PRODUCTS, 11 CART

:
PRODUCTS: id (string), name (string), description (string), price (int), unit (string), stock (int), image (string), date_created (datetime), date_updated (datetime)

:
:
IS, 11 PRODUCTS, 0N CATEGORY
CATEGORY: id (string), category_name (string), date_created (datetime), date_updated (datetime)
HAS A3, 01 COLOR, 11 CATEGORY
COLOR: id (string), hexa_code (string), date_created (datetime), date_updated (datetime)

# MLD :

:
USERS: id (string), firstname (string), lastname (string), email (string), password (string), isShop (Boolean), location_id (string FK), date_created (datetime), date_updated (datetime)
HAS A1, 0N LOCATION, 11 USERS
LOCATION: id (string),adress (string), city_name (string),country (string), zip_code (int), date_created (datetime), date_updated (datetime)
HAS A2, 1N LOCATION, 11 SHOPS
SHOPS: id (string), name (string), email (string), password (string), isShop (Boolean), location_id (string FK), date_created (datetime), date_updated (datetime)

:
BELONGS TO, 11 USERS, 11 CART
:
CART: id (string), products (array), user_id (string FK), date_created (datetime), date_updated (datetime)
:
SELLS, 0N SHOPS, 11 PRODUCTS

:
IS FILLED WITH, 0N PRODUCTS, 11 CART

:
PRODUCTS: id (string), name (string), description (string), price (int), unit (string), stock (int), image (string), shop_id (string FK), category_id (string FK), date_created (datetime), date_updated (datetime)


:
:
IS, 11 PRODUCTS, 0N CATEGORY
CATEGORY: id (string), category_name (string), color_id (string FK), date_created (datetime), date_updated (datetime)
HAS A3, 01 COLOR, 11 CATEGORY
COLOR:
 id (string), hexa_code (string), date_created (datetime), date_updated (datetime)


# Test :
USERS: id (string), firstname (string), lastname (string), email (string), password (string), isShop (Boolean), location_id (string FK), date_created (datetime), date_updated (datetime)
LOCATION: id (string),adress (string), city_name (string),country (string), zip_code (int), date_created (datetime), date_updated (datetime)
SHOPS: id (string), name (string), email (string), password (string), location_id (string FK), isShop (Boolean), date_created (datetime), date_updated (datetime)

PRODUCTS: id (string), category_id (string), name (string), description (string), price (int), unit (string), stock (int), shop_id (string FK), image (string), date_created (datetime), date_updated (datetime), date_deleted (datetime)

CART: id (string), user_id (string FK), products ([product_ids]), date_created (datetime), date_updated (datetime)

CATEGORY: id (string), category_name (string), color_id (string FK), date_created (datetime), date_updated (datetime)

COLOR: id (string), hexa_code (string), date_created (datetime), date_updated (datetime)