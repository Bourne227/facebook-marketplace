// JavaScript source code
// import {useHistory} from 'react-router-dom';

import React from 'react';
const Login = ({islogin}) => {
  const [user, setUser] = React.useState({username: '', password: ''});
  // const history = useHistory();
  const handleInputChange = (event) => {
    console.log('handle input change');
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };

  const onSubmit = (event) =>{
    console.log('caling on submit');
    event.preventDefault();
    fetch('/authenticate', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          throw res;
        }
        console.log('success');
        return res.json();
      })
      .then((json) => {
        localStorage.setItem('user', JSON.stringify(json));
        // history.push('/');
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
        alert('Error logging in, please try again');
      });
  };
  console.log(islogin);

  console.log(user.username);
  return (
    <div className={`${islogin ? 'active' : ''} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form onSubmit={onSubmit}>
            <h1 className="login-text">Sign In</h1>
            <label>Username</label>
            <br></br>
            <input
              type="text"
              name="username"
              className="login-box"
              onChange={handleInputChange}
            />
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              onChange={handleInputChange}
            />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
