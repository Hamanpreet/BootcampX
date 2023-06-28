SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN (students JOIN cohorts 
ON students.cohort_id = cohorts.id)
ON students.id = assignment_submissions.student_id
WHERE cohorts.name = 'FEB12';

-- Compass Solution
-- SELECT sum(assignment_submissions.duration) as total_duration
-- FROM assignment_submissions
-- JOIN students ON students.id = student_id
-- JOIN cohorts ON cohorts.id = cohort_id
-- WHERE cohorts.name = 'FEB12';