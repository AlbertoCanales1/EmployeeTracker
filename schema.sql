DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE  employee_tracker;

CREATE TABLE employee (
id INTEGER AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,4) NULL,
department_id INT NULL,
PRIMARY KEY (id)
);

CREATE TABLE department (
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;