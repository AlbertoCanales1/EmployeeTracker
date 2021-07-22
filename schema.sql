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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( 'John', 'Doe', 16772, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( 'Jenny', 'Pill', 16773, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( 'Jack', 'Piggeon', NULL, 18775);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( 'Mel', 'Corn', NULL, 18776);

INSERT INTO role (title, salary, department_id)
VALUES ( 'Manager', 58000 , 12345 );

INSERT INTO role (title, salary, department_id)
VALUES ( 'Employee', 30000 , 67891 );

INSERT INTO department (name)
VALUES ( 'Finance');

INSERT INTO department (name)
VALUES ( 'Marketing');

INSERT INTO department (name)
VALUES ( 'Operations Management');

INSERT INTO department (name)
VALUES ( 'HR');


SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;