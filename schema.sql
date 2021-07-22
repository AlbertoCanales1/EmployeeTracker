DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE DATABASE employee_tracker;

CREATE TABLE employee (
id INT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY id,
);

CREATE TABLE role (
id INT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,4) NULL,
department_id INT NULL,
PRIMARY KEY id,
);

CREATE TABLE department (
id INT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
PRIMARY KEY id,
);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;


