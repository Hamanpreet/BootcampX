const { Pool } = require('pg');

//creating instance of a class
//pool preferred(Can handle multiple requests at once)
const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT DISTINCT teachers.name AS teacher,
cohorts.name AS cohort
FROM assistance_requests
JOIN teachers on teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2] || 'JUL02'}%'
GROUP BY teacher,cohort
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));