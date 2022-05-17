USE University;
SELECT
    student.firstname, student.lastname
FROM
    student
JOIN
    class
ON
    student.class_id=class.class_id
WHERE
    department_id=3;