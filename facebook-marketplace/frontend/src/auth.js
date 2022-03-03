const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
// const secrets = require('../data/secrets');
var users = require('./fuser');
const tokenT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmFAYm9va3MuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjA2Mjc3MDAxLCJleHAiOjE2MDYyNzcwNjF9.1nwY0lDMGrb7AUFFgSaYd4Q7Tzr-BjABclmoKZOqmr4";

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
  //   return user.email === email && 
  //   bcrypt.compareSync(password, user.password);
  // });

  // if (user) {
  //   const accessToken = jwt.sign(
  //     {email: user.email, role: user.role}, 
  //     secrets.accessToken, {
  //       expiresIn: '30m',
  //       algorithm: 'HS256'
  //     });
  //   res.status(200).json({name: user.name, accessToken: accessToken});
  // } else {
  //   res.status(401).send('Username or password incorrect');
  // }
  // res.status(200).json({useremail: "abd", accessToken: "abc"});
};

exports.check = (req, res, next) => {
  console.log("checking");
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  // return res.sendStatus(403);
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secrets.accessToken, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    console.log("401");
    res.sendStatus(401);
  }
};

