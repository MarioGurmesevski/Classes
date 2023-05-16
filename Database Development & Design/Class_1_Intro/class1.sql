-- DDL statements
CREATE TABLE IF NOT EXISTS test ();

Create TABLE users ();

DROP TABLE IF EXISTS test ();
DROP TABLE users()

-- 1. Name of the column
-- 2. Data type of the column
-- 3. Option on columns

CREATE TABLE BuisnessEntity(
	Id INTEGER PRIMARY KEY,
	Name varchar(100),
	Region varchar(1000) NULL,
	ZipCode char(4) NULL,
	Size varchar(10) NULL,
)

INSERT INTO BuisnessEntity (Id,Name,Region,ZipCode,Size)
VALUES(1,'Tinex','Skopje','1000','large')

INSERT INTO BuisnessEntity (Id,Name,Region,ZipCode,Size)
VALUES(2,'Ramstor','Skopje','1000','medium')

SELECT * FROM BuisnessEntity

-- varchar in SQL === string in JS

CREATE TABLE Employee
(
	Id INTEGER PRIMARY KEY NOT NULL,
	FirstName varchar(100) NOT NULL,
	LastName varchar(100) NOT NULL,
	DateOfBirth date NULL,
	Gender nchar(1) NULL,
	HireDate date NULL,
	NationalIdNumber varchar(20) NULL
)

DROP TABLE Employee

-- DATE FORMAT YEAR/DAY/MONTH

INSERT INTO Employee(Id,FirstName,LastName,DateOfBirth,Gender,HireDate,NationalIdNumber)
VALUES (1,'Mario','Gurmesevski','09/07/2005','M','10/10/2020','21243151')

INSERT INTO Employee(Id,FirstName,LastName,DateOfBirth,Gender,HireDate,NationalIdNumber)
VALUES (2,'John','Doe','2002-07-09','M','10/10/2020','124124235')

SELECT * FROM Employee

SELECT Id,FirstName,LastName,DateOfBirth FROM Employee

SELECT * FROM Employee
WHERE FirstName = 'John'

-- UPDATE STATEMENTS

UPDATE Employee
SET DateOfBirth = '05/02/2000'
WHERE Id = 2

-- DELETE STATEMENTS

DELETE 
FROM Employee
WHERE Id = 1

-- Customer 
-- id
-- Name - string
-- AccountNumber - number
-- City - string
-- RegionName - string
-- PhoneNumber - string
-- isActive - boolean

CREATE TABLE Customer
(
	Id INTEGER PRIMARY KEY,
	Name varchar(50),
	AccountNumber INTEGER,
	City varchar(50),
	RegionName varchar(50),
	PhoneNumber varchar(50),
	isActive boolean 
)

SELECT * FROM Customer

INSERT INTO Customer (Id,Name,AccountNumber,City,RegionName,PhoneNumber,isActive)
VALUES (1,'John',42141,'USA','USA','4214124',true)








