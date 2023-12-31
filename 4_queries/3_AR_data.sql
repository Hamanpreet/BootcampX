SELECT teachers.name AS teacher,
students.name AS student,
assignments.name AS assignment,
(completed_at - started_at) AS duration
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN assignments ON assignment_id = assignments.id
JOIN students ON student_id = students.id
-- GROUP BY students.name,teacher, assignment,(completed_at - started_at)
ORDER BY duration;