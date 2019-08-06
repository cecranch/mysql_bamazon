ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Christmas1';

DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;
CREATE TABLE products
(
   item_id int auto_increment not null,
   product_name varchar(100) not null,
   department_name varchar(100) not null,
   price float not null,
   stock_quantity int not null,
   primary key (item_id)
);


SELECT *
FROM products;