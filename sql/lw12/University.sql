CREATE DATABASE University;
USE University;
CREATE TABLE Student
(
    student_id INT,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    age INT,
    class_id INT
);
CREATE TABLE Class
(
    class_id INT,
    name_class VARCHAR(20),
    department_id INT
);
CREATE TABLE Department
(
    department_id INT,
    name_department VARCHAR(20)
);