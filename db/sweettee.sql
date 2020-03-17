DROP DATABASE IF EXISTS sweet_tee_DB;
CREATE DATABASE sweet_tee_DB;
USE sweet_tee_DB;


create table user_info (
id INT NOT NULL AUTO_INCREMENT,
username varchar(50),
user_password varchar(50),
first_name varchar(45),
last_name varchar(45)
);

create table user_shirt_info (
product_id INT
size varchar(45),
color varchar(45),
quantity INT
)