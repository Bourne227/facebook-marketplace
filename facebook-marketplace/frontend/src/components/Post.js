import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PostView from './PostView';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const styles = makeStyles({
  media: {
    height: '200px',
  },
  post_price: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  Dialog_header: {
    width: '100%',
    height: '40px',
    paddingTop: '10px',
    paddingLeft: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const Post = ({title, price, description, URL, owner, date, category}) => {
  console.log(category);
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleClickOpen}>
        <CardActionArea>
          <CardMedia className={classes.media} image={URL} />
          <CardContent>
            <Typography variant='caption' fontWeight='bold'>
              {price > '0' ? price + '$' : 'FREE'}
            </Typography>
            <br />
            <Typography variant='caption' fontWeight='bold'>
              {title}
            </Typography>
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className={classes.Dialog_header}>
          <div></div>
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
        <PostView
          title={title}
          price={price}
          image={URL}
          description={description}
          owner={owner}
          date={date}
        />
      </Dialog>
    </>
  );
};

export default Post;
