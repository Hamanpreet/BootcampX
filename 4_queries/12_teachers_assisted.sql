SELECT teachers.name AS teacher,
cohorts.name AS cohort
FROM assistance_requests
JOIN teachers on teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher,cohort
ORDER BY teacher;