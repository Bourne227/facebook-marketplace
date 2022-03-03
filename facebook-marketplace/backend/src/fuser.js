const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.regUser = async (req, res) => {
  const uservalue = {name: req.name, password: req.password};
  const update = 'INSERT INTO fuser(useremail, uservalue) VALUES ($1, $2) RETURNING *';
  const query = {
    text: update,
    values: [req.username, uservalue],
  };
  const {rows} = await pool.query(query);
  return rows[0];
};


exports.find = async (useremail) => {
  console.log("call find user");
  let select = 'SELECT * FROM fuser WHERE useremail = $1';
  const q = {
    text: select,
    values: [useremail],
  };
  const {rows} = await pool.query(q);
  return rows.length == 1 ? rows[0] : undefined;
};