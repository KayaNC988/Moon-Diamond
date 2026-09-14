# MLD — Moon Diamond

## Table users

| Champ | Type | Contraintes |
|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| firstname | VARCHAR(100) | NOT NULL |
| lastname | VARCHAR(100) | NOT NULL |
| email | VARCHAR(255) | NOT NULL, UNIQUE |
| password_hash | VARCHAR(255) | NOT NULL |
| role | ENUM('customer', 'admin') | NOT NULL, DEFAULT 'customer' |
| created_at | DATETIME | NOT NULL |
| updated_at | DATETIME | NOT NULL |


## Table categories

| Champ | Type | Contraintes |
|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| name | VARCHAR(100) | NOT NULL, UNIQUE |
| slug | VARCHAR(120) | NOT NULL, UNIQUE |
| created_at | DATETIME | NOT NULL |
| updated_at | DATETIME | NOT NULL |


## Table products

| Champ | Type | Contraintes |
|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| name | VARCHAR(150) | NOT NULL |
| slug | VARCHAR(170) | NOT NULL, UNIQUE |
| description | TEXT | NOT NULL |
| price | DECIMAL(10,2) | NOT NULL |
| stock | INT | NOT NULL, DEFAULT 1 |
| width_cm | DECIMAL(6,2) | NOT NULL |
| height_cm | DECIMAL(6,2) | NOT NULL |
| status | ENUM('draft', 'available', 'sold') | NOT NULL, DEFAULT 'draft' |
| category_id | INT | NOT NULL, FOREIGN KEY → categories(id) |
| created_at | DATETIME | NOT NULL |
| updated_at | DATETIME | NOT NULL |


## Table product_images

| Champ | Type | Contraintes |
|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| image_url | VARCHAR(500) | NOT NULL |
| alt_text | VARCHAR(255) | NULL |
| position | INT | NOT NULL, DEFAULT 0 |
| product_id | INT | NOT NULL, FOREIGN KEY → products(id) |
| created_at | DATETIME | NOT NULL |
| updated_at | DATETIME | NOT NULL |


## Table orders

| Champ | Type | Contraintes |
|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| status | ENUM('pending', 'confirmed', 'shipped', 'completed', 'cancelled') | NOT NULL, DEFAULT 'pending' |
| total | DECIMAL(10,2) | NOT NULL |
| shipping_firstname | VARCHAR(100) | NOT NULL |
| shipping_lastname | VARCHAR(100) | NOT NULL |
| shipping_address | VARCHAR(255) | NOT NULL |
| shipping_postal_code | VARCHAR(20) | NOT NULL |
| shipping_city | VARCHAR(120) | NOT NULL |
| shipping_country | VARCHAR(100) | NOT NULL |
| user_id | INT | NOT NULL, FOREIGN KEY → users(id) |
| created_at | DATETIME | NOT NULL |
| updated_at | DATETIME | NOT NULL |


## Table order_items

| Champ | Type | Contraintes |
|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| quantity | INT | NOT NULL, DEFAULT 1 |
| unit_price | DECIMAL(10,2) | NOT NULL |
| order_id | INT | NOT NULL, FOREIGN KEY → orders(id) |
| product_id | INT | NOT NULL, FOREIGN KEY → products(id) |
| created_at | DATETIME | NOT NULL |
| updated_at | DATETIME | NOT NULL |