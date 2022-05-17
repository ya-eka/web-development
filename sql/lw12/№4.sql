USE
    University;
SELECT
    department.name_department, class.name_class
FROM
    student
JOIN
    class
ON
    class.class_id=student.class_id
JOIN
	department
ON
    department.department_id=class.department_id
WHERE
    student.firstname='Elena' 
AND 
    student.lastname='Ershova';