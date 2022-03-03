const {Pool} = require('pg');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

// exports.authenticate = async (req, res) => {
//   const { email, password } = req.body;
//   console.log('called get all at fuser');
//   let select = 'SELECT * FROM fuser';
//   const q = {
//     text: select,
//     values: [],
//   };
//   const { rows } = await pool.query(q);
//   for (const row of rows) {
//     console.log(row.useremail);
//     const user = row.useremail.find((user) => {
//       return user.email === email &&
//         bcrypt.compareSync(password, user.password);
//     });
//   }
  
//   if (user) {
//     const accessToken = jwt.sign(
//       { email: user.email, role: user.role },
//       secrets.accessToken, {
//       expiresIn: '30m',
//       algorithm: 'HS256'
//     });
//     res.status(200).json({ name: user.name, accessToken: accessToken });
//   } else {
//     res.status(401).send('Username or password incorrect');
//   }
// };

// exports.check = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     console.log(token);
//     jwt.verify(token, secrets.accessToken, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };

exports.getUser = async (req, res) => {
  console.log('called get all at fuser');
  let select = 'SELECT * FROM fuser';
  const q = {
    text: select,
    values: [],
  };
  const { rows } = await pool.query(q);
  for (const row of rows) {
    console.log(row.uservalue.password);
  }
  console.log('done');
};
exports.find = async (useremail)=> {
  console.log("call find user");
  console.log(useremail);
  let select = 'SELECT * FROM fuser WHERE useremail = $1';
  const q = {
    text: select,
    values: [useremail],
  };
  const {rows} = await pool.query(q);
  console.log(rows.length);
  if (rows.length == 1) {
    console.log(rows[0]);
  }
  return rows.length == 1 ? rows[0] : undefined;
};