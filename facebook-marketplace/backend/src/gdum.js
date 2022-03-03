const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.getDummy = async (req, res) => {
  const dict = {};
  const all = [];
  console.log('called get all at dummy');
  let select = 'SELECT * FROM dummy';
  const q = {
    text: select,
    values: [],
  };
  const { rows } = await pool.query(q);
  for (const row of rows) {
    if (! dict.hasOwnProperty(row.dtype, 0)) {
      dict[row.dtype] = [row.dvalue];
    } else {
      dict[row.dtype].push(row.dvalue);
    }
  }
  Object.keys(dict).map((keys)=>{
    all.push({'dtype': keys, 'dvalue': dict[keys]});
  });
  return all;
};

