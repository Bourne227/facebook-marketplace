import {Avatar, Button, InputBase, Typography} from '@mui/material';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Search} from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Categories from './Categories';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='right' ref={ref} {...props} />;
});

const styles = makeStyles({
  actions_container: {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
  },
  searchContainer: {
    backgroundColor: '#e4e6ea',
    height: '30px',
  },
  actions_container_top: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  actions_container_bottom: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    borderBottomWidth: '2px',
  },
  actions_input_container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    height: 30,
    fontWeight: 'bold',
    backgroundColor: '#e4e6ea',
    color: 'black',
    borderRadius: '20px',
  },
  search: {
    width: '100%',
  },
  Dialog_header: {
    width: '100%',
    height: '50px',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const Actions = ({setposts}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = styles();
  return (
    <div className={classes.actions_container}>
      <div className={classes.actions_container_top}>
        <Avatar sx={{width: 30, height: 30}} alt={'profile_picture'} src='' />
        <Button
          variant='contained'
          style={{
            height: 30,
            fontWeight: 'bold',
            backgroundColor: '#e4e6ea',
            color: 'black',
            borderRadius: '20px',
            marginLeft: '5px',
          }}
        >
          Sell
        </Button>
        <Button
          variant='contained'
          style={{
            height: 30,
            fontWeight: 'bold',
            backgroundColor: '#e4e6ea',
            color: 'black',
            borderRadius: '20px',
            marginLeft: '5px',
          }}
          onClick={handleClickOpen}
        >
          All Categories
        </Button>
      </div>
      <div className={classes.actions_container_bottom}>
        <div className={classes.actions_input_container}>
          <Search color='#DDDDDD' />
          <InputBase
            placeholder={'Search Marketplace'}
            className={classes.search}
          />
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className={classes.Dialog_header}>
          <div></div>
          <Typography variant='h6'>Select Categoires</Typography>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleClose}
            aria-label='close'
            style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <hr />
        <Categories setposts={setposts} />
      </Dialog>
    </div>
  );
};

export default Actions;
