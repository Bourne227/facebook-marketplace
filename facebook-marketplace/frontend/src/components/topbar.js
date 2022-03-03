import React, {useState} from 'react';
import {AppBar, Button, Toolbar} from '@mui/material';
import logo from '../assets/images/Logo.png';
import {makeStyles} from '@material-ui/core/styles';
const styles = makeStyles({
  logo: {
    height: '55px',
    width: '100px',
  },
  toolbar: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
let hideSignup = true;
let show = false;
const Top = () => {
  console.log('----------start------------');
  let welcomemessage = '';
  const [refresh, setRefresh] = useState(0);
  const [user, setUser] =
    React.useState({username: '', name: '', password: ''});
  const [showact, setShowact] = useState(show);
  const classes = styles();
  const hasuser = localStorage.getItem('user') != null;
  const clickLog = () => {
    if (hasuser) {
      localStorage.removeItem('user');
      console.log('Local Storage: ', localStorage);
      setShowact(!show);
    } else {
      hideSignup = true;
      show = !show;
      setShowact(show);
    }
  };

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    console.log(u);
    setUser(u);
  };

  const onSubmit = (event) =>{
    console.log('on submit');
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
        return res.json();
      })
      .then((json) => {
        console.log('json ---- ', json);
        localStorage.setItem('user', JSON.stringify(json));
        show = false;
        setShowact(false);
      })
      .catch((err) => {
        console.log(err);
        alert('Error logging in, please try again');
      });
  };

  const onSignUp = (event) =>{
    event.preventDefault();
    if (user.username === '' || user.name === '' || user.password === '') {
      alert('can not have empty input');
      console.log('invalide input');
      return;
    }
    console.log(user);
    console.log('on sign up');
    fetch('/regester', {
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
        return res.json();
      })
      .then((json) => {
        localStorage.setItem('user', JSON.stringify(json));
        hideSignup = true;
        setRefresh(refresh+1);
        setShowact(false);
      })
      .catch((err) => {
        if (err.status === 401) {
          alert('This email has already signed up');
        } else {
          alert('System error');
        }
      });
  };

  const clickSignUp = (event) =>{
    hideSignup = !hideSignup;
    show = false;
    setRefresh(refresh+1);
    setShowact(false);
  };
  console.log(showact);
  console.log('Hide sign up: ', true);
  console.log('----------end------------');
  const u = localStorage.getItem('user');
  console.log(JSON.parse(u));
  if (hasuser) {
    welcomemessage = 'Welcome ' + JSON.parse(u).name;
  }

  return (
    <div>
      <AppBar position='relative'>
        <Toolbar className={classes.toolbar} >
          <img src={logo} alt="Logo" className={classes.logo} />
          <div className="welcome">
            {welcomemessage}
          </div>
          <Button
            className={`${!hasuser ? '' : 'active'} show`}
            variant='contained' size='medium'
            onClick={clickSignUp}>
            sign up </Button>
          <Button
            variant='contained' size='medium'
            onClick={clickLog}>
            {hasuser ? 'log out':'log in'} </Button>
        </Toolbar>
      </AppBar>
      {/* <div className={`${showact ? '' : 'active'} show`}> */}
      <div hidden ={!showact}>
        <div className="login-form">
          <div className="form-box solid">
            <form onSubmit={onSubmit}>
              <h1 className="login-text">Sign In</h1>
              <label>User Email</label>
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
              <input
                type="submit"
                value="LOGIN"
                className="login-btn"/>
            </form>
          </div>
        </div>
      </div>
      <div hidden ={hideSignup}>
        <div className="login-form">
          <div className="form-box solid">
            <form onSubmit={onSignUp}>
              <h1 className="login-text">Sign Up</h1>
              <label>Your email address</label>
              <br></br>
              <input
                type="text"
                name="username"
                className="login-box"
                onChange={handleInputChange}
              />
              <br></br>
              <label>Name</label>
              <br></br>
              <input
                type="text"
                name="name"
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
              <input
                type="submit"
                value="SIGN UP"
                className="login-btn"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
