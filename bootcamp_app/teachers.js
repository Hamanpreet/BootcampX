const { Pool } = require('pg');

//creating instance of a class
//pool preferred(Can handle multiple requests at once)
const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2] || 'JUL02';

// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`];


pool.query(`
SELECT DISTINCT teachers.name AS teacher,
cohorts.name AS cohort
FROM assistance_requests
JOIN teachers on teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
GROUP BY teacher,cohort
ORDER BY teacher;
`,values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));