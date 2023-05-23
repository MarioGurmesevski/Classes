-- Creating Tables

CREATE TABLE employees 
(
	employee_id serial primary key,
	first_name varchar(50),
	last_name varchar(50),
	department_id int
);

CREATE TABLE departments
(
	department_id serial primary key,
	department_name varchar(50)
);

-- Inserting Data

INSERT INTO employees (first_name, last_name,department_id)
VALUES('John', 'Doe', 1),
	  ('Jane', 'Smith', 2),
	  ('Micheal', 'Johnson', 1);

INSERT INTO departments(department_name)
VALUES('Sales'),
	  ('Marketing'),
	  ('Development');
	  
-- Select data

SELECT * FROM employees
SELECT * FROM departments

-- Inner Join

SELECT e.employee_id,e.first_name,e.last_name,d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id

SELECT e.employee_id, e.first_name, d.department_name
FROM departments d
LEFT JOIN employees e ON d.department_id = e.employee_id

-- Left Join

SELECT e.employee_id,e.first_name,e.last_name,d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id

-- Right Join

SELECT e.employee_id,e.first_name,e.last_name,d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id

SELECT e.employee_id, e.first_name, d.department_name
FROM departments d
RIGHT JOIN employees e ON d.department_id = e.employee_id

-- Outer Join

SELECT e.employee_id,e.first_name,d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.department_id

















