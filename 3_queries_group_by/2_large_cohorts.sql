SELECT cohorts.name AS cohort_name,
COUNT(students.*) as student_count
FROM students JOIN cohorts on students.cohort_id = cohorts.id
GROUP BY cohort_name
HAVING COUNT(students.*) >= 18
ORDER BY student_count;



