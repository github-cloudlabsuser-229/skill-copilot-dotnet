-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10, 2)
);

-- Insert 5 products into the products table
INSERT INTO products (product_id, product_name, price) VALUES (1, 'Product A', 100.00);
INSERT INTO products (product_id, product_name, price) VALUES (2, 'Product B', 200.00);
INSERT INTO products (product_id, product_name, price) VALUES (3, 'Product C', 300.00);
INSERT INTO products (product_id, product_name, price) VALUES (4, 'Product D', 400.00);
INSERT INTO products (product_id, product_name, price) VALUES (5, 'Product E', 500.00);

-- Create a table for 3 customers with customer names and emails
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    email VARCHAR(50)
);

-- Insert 3 customers into the customers table
INSERT INTO customers (customer_id, customer_name, email) VALUES (1, 'Alice', '