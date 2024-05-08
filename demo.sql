-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
-- Insert 5 products into the table
INSERT INTO products (name, price) VALUES ('Product 1', 10.99);
INSERT INTO products (name, price) VALUES ('Product 2', 19.99);
INSERT INTO products (name, price) VALUES ('Product 3', 7.99);
INSERT INTO products (name, price) VALUES ('Product 4', 14.99);
INSERT INTO products (name, price) VALUES ('Product 5', 5.99);