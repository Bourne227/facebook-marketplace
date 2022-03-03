const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
// const secrets = require('../data/secrets');
var users = require('./fuser');
const tokenT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmFAYm9va3MuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjA2Mjc3MDAxLCJleHAiOjE2MDYyNzcwNjF9.1nwY0lDMGrb7AUFFgSaYd4Q7Tzr-BjABclmoKZOqmr4";

exports.postuser = async (req, res) => {
  console.log('at backend postuser');
  console.log(req.body);
  const find = await users.find(req.body.username);
  if (find) {
    res.status(401).send('Already have an account');
  } else {
    const user = await users.regUser(req.body);
    console.log(user);
    const accessToken = jwt.sign(
      {email: user.email, role: user.role}, 
      tokenT, {
        expiresIn: '30m',
        algorithm: 'HS256'
      });
    console.log('regester success at backend');
    res.status(200).json({name: user.uservalue.name, accessToken: accessToken});
    
  }
};

exports.authenticate = async (req, res) => {
  console.log("calling right here");
  console.log(req.body);
  // const { email, password } = req.body;
  const user = await users.find(req.body.username);
  if (user) {
    console.log("user exist");
    if (user.uservalue.password == req.body.password) {
      const accessToken = jwt.sign(
        {email: user.email, role: user.role}, 
        tokenT, {
          expiresIn: '30m',
          algorithm: 'HS256'
        });
      console.log(accessToken);
      console.log(user.uservalue.name);
      res.status(200).json({name: user.uservalue.name, accessToken: accessToken});
      console.log("correct password");
    }else {
      res.status(401).send('Username or password incorrect');
    }
  } else {
    res.status(401).send('Username or password incorrect');
  }
};



