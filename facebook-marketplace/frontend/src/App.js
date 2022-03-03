import {Grid} from '@mui/material';
import React, {useState, useEffect} from 'react';
// import Navbar from './components/Navbar';
import LoginNotice from './components/LoginNotice';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
// import Login from './components/Login';
import Top from './components/topbar';
import './styles.css';

const App = () => {
  console.log('refreashing APP');
  const [posts, setposts] = useState([]);
  useEffect(() => {
    console.log('at app CHANGED!');
  }, [posts]);
  // const handlechange = () => {
  //   console.log('here');
  // };
  // handleLoginClick={handlechange}
  return (
    <div>
      <Top/>
      {/* <Navbar handleLoginClick={handleLoginClick}/>
      <Login ishide={ishide} /> */}
      <Grid container style={{paddingTop: '55px'}}>
        <Grid item sm={3} display={{
          xs: 'none', sm: 'block',
          lg: 'block',
        }}>
          <Sidebar setposts={setposts} />
        </Grid>
        <Grid item sm={9}>
          <LoginNotice />
          <Body posts={posts} setposts={setposts} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
