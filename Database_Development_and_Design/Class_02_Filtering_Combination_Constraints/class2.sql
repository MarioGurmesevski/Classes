CREATE TABLE IF NOT EXISTS Customer 
(
	Id serial PRIMARY KEY NOT NULL,
	Name varchar(100) NULL,
	AccountNumber varchar(50) NULL,
	City varchar(50) NULL,
	RegionName varchar(50) NULL,
	PhoneNumber varchar(20) NULL,
	IsActive boolean NULL
)	

INSERT INTO 
Customer (Name)
VALUES
		('Igor'),
		('Todor')

SELECT * FROM Customer

DROP TABLE IF EXISTS Customer

CREATE TABLE "Order" 
(
	Id serial PRIMARY KEY NOT NULL,
	"OrderDate"  date NULL,
	status smallint NULL,
	comment varchar(500) NULL
)

DROP TABLE IF EXISTS "Order"

INSERT INTO "Order" ("OrderDate",status,comment)
VALUES			  ('2012-01-02','1','This is an order')


--

SELECT * FROM BusinessEntity;
SELECT * FROM Employee;
SELECT * FROM Product;
SELECT * FROM Customer;
SELECT * FROM "Order";
SELECT * FROM OrderDetails;

SELECT * 
FROM Employee
WHERE firstname = 'Aleksandar'

-- EXERCISE 1

-- Find all employees with first name Goran

SELECT * 
FROM Employee
WHERE firstname = 'Goran'

-- Find all employees with Last name starting with S

SELECT * 
FROM Employee
WHERE lastname ILIKE 's%'

-- Find all employees with Date of birth greater then 01.01.1980

SELECT * 
FROM Employee
WHERE dateofbirth > '1980.01.01'

-- Find all male employees

SELECT * 
FROM Employee
WHERE gender = 'M'

-- Find all employees hired in June 2010

SELECT * 
FROM Employee
WHERE hiredate  BETWEEN '2010-06-01' AND '2010-06-30'

-- Find all employees with last name starting with M hired in january 2010

SELECT * 
FROM Employee
WHERE lastname ILIKE 'm%' 
AND
hiredate BETWEEN '2010-01-01' AND '2010-01-31'

-- Ordering / Filtering / Sorting

--ASCENDING

SELECT * 
FROM Employee
ORDER BY dateofbirth

SELECT * 
FROM Employee
ORDER BY dateofbirth ASC

--DESCENDING

SELECT * 
FROM Employee
ORDER BY dateofbirth DESC

SELECT * 
FROM Customer
ORDER BY name DESC

-- EXERCISE 2

-- find all employees with first name Aleksandar ordered by lastname

SELECT * 
FROM Employee
WHERE firstname = 'Aleksandar'
ORDER BY lastname 

-- list all employees ordered by first name

SELECT * 
FROM Employee
ORDER BY firstname

-- find all male employees ordered by hire date starting from the last hired

SELECT * 
FROM Employee
WHERE gender = 'M'
ORDER BY hiredate DESC 

-- Combination

-- Union

SELECT region
FROM BusinessEntity
UNION
SELECT regionname
FROM Customer

-- Union All

SELECT region
FROM BusinessEntity
UNION ALL
SELECT regionname
FROM Customer

-- Intersect
 
SELECT region
FROM BusinessEntity
INTERSECT
SELECT regionname
FROM Customer

SELECT firstname,lastname
FROM Employee
WHERE firstname = 'Aleksandar'
INTERSECT
SELECT firstname,lastname
FROM Employee
WHERE lastname = 'Zdraveski'

SELECT id
FROM Employee
WHERE id > 2
INTERSECT
SELECT id
FROM Customer
WHERE id <10

-- EXERCISE 3

-- List all BusinessEntity names and customer names in single result set with duplicates

SELECT name
FROM BusinessEntity
UNION ALL
SELECT name
FROM Customer

-- List all regions names where some BusinessEntity is based, or some customer is based. Remove duplicates.

SELECT region
FROM BusinessEntity
UNION
SELECT regionname
FROM Customer

-- List all regions where we have BusinessEntityies and Customers in the same time

SELECT region
FROM BusinessEntity
INTERSECT
SELECT regionname
FROM Customer

-- Constraints

-- Check

CREATE TABLE "User"
(
	id serial PRIMARY KEY NOT NULL,
	name varchar(30) NOT NULL,
	age smallint CHECK(age >= 18)
)

INSERT INTO "User" (name,age)
VALUES  ('Todor',34),
		('Ivo',33)
	   -- ('Mario',17)

SELECT * FROM "User"

CREATE TABLE managers 
(
	id serial PRIMARY KEY,
	email varchar(20) UNIQUE
)

INSERT INTO managers (email)
VALUES	('test@gmail.com')

INSERT INTO managers (email)
VALUES	('test2@gmail.com')

SELECT * FROM managers

-- Foreign Keys

CREATE TABLE Artist 
(
	id serial PRIMARY KEY,
	name varchar(20)
)

CREATE TABLE Song
(
	id serial PRIMARY KEY,
	title varchar(20),
	artist_id integer REFERENCES Artist (id)
)

INSERT INTO Artist (name)
VALUES ('Eminem'),
	   ('Shakira'),
	   ('Bob Marley'),
	   ('The Weekend'),
	   ('Jordan Mitev')

INSERT INTO Artist (name)
VALUES ('Naum Petrevski')


SELECT * FROM Artist

INSERT INTO Song (title,artist_id)
VALUES ('Mocking Bird',1),
	   ('Loose Yourself',1),
	   ('Waka Waka',2),
	   ('Dont worry be happy',3),
	   ('After Hours',4),
	   ('Zena za 100 Godini',5)

SELECT * FROM Song

-- Join

--Inner Join

SELECT * FROM Artist a
INNER JOIN Song s 
ON a.id = s.artist_id

SELECT * FROM Song s
INNER JOIN Artist a 
ON s.artist_id = a.id

-- Left Join

SELECT * FROM Song s
LEFT JOIN Artist a
ON s.artist_id = a.id












