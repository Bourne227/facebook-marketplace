import {Button, Typography} from '@mui/material';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


const styles = makeStyles({
  button_container: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notice_container: {
    backgroundColor: '#ffbaaf',
    padding: '20px',
  },
  notice_text: {
    fontSize: '20px',
  },
  button: {
    backgroundColor: '#FFF',
  },
});

const LoginNotice = () => {
  const classes = styles();
  return (
    <div className={classes.notice_container}>
      <Typography variant='caption' fontSize={15} fontWeight={'bold'}>
        Buy and sell items locally or have something
         new shipped from stores.</Typography>
      <br/>
      <Typography variant='caption' fontSize={15} paragraph>
        Log in to get the full Facebook Marketplace experience.</Typography>
      <div className={classes.button_container}>
        <Button variant='contained' size='small'
          style={{
            fontWeight: 'bold', backgroundColor: '#FFF',
            color: 'black',
          }}
        >log in</Button>
        <Button variant='contained' size='small'
          style={{fontWeight: 'bold', backgroundColor: '#FFF',
            color: 'black', width: '75%', maxWidth: '300px'}}
        >Learn more</Button>
      </div>
    </div>
  );
};

export default LoginNotice;
