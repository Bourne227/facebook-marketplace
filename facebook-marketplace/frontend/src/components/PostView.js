import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';

const styles = makeStyles({
  postViewImg: {
    width: '70%',
    height: '100%',
  },
  imageSide: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  postimage: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  postViewInfoSide: {
    backgroundColor: '#fff',
    padding: '10px',
  },
  postViewInfoSideActions: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

const PostView = ({title, price, image, description, owner, date}) => {
  const classes = styles();

  return (
    <div className={classes.postView}>
      <Grid container direction={'row'}>
        <Grid item sm={12} xs={12} className={classes.imageSide}>
          <div className={classes.postimage}>
            <img
              src={image}
              alt={'POST PICTURES'}
              className={classes.postViewImg}
            />
          </div>
          <Grid
            item
            sm={2}
            xs={2}
            className={classes.postViewInfoSide}
            display={{xs: 'none', sm: 'block', lg: 'block'}}
          >
            <List>
              <Grid
                container
                spacing={2}
                className={classes.postViewInfoSideActions}
              >
                <Grid item>
                  <IconButton
                    edge='start'
                    color='inherit'
                    style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
                  >
                    <AppsIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    edge='start'
                    color='inherit'
                    style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
                  >
                    <NotificationsIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    edge='start'
                    color='inherit'
                    style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
                  >
                    <ArrowDropDownIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Divider component='li' />
              <ListItem>
                <ListItemText
                  color='text.secondary'
                  primary={title}
                  secondary={price + '$'}
                />
              </ListItem>
              <li>
                <Typography
                  sx={{mt: 0.5, ml: 2}}
                  color='text.secondary'
                  display='block'
                  variant='caption'
                  fontSize='18px'
                >
                  Details
                </Typography>
              </li>
              <Grid
                container
                alignItems='center'
                paddingLeft={'15px'}
                paddingRight={'15px'}
              >
                <Grid item xs>
                  <Typography gutterBottom variant='caption' component='div'>
                    condition
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant='caption' component='div'>
                    used - Like new
                  </Typography>
                </Grid>
              </Grid>
              <li>
                <Typography
                  sx={{mt: 0.5, ml: 2}}
                  color='text.secondary'
                  display='block'
                  variant='caption'
                  fontSize='17px'
                >
                  {description}
                </Typography>
              </li>
              <ListItem>
                <ListItemText
                  color='text.secondary'
                  primary={'America'}
                  secondary={'location is approximate'}
                />
              </ListItem>
              <Divider component='li' />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={owner} secondary={date} />
              </ListItem>
              <Divider component='li' />
            </List>
          </Grid>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          className={classes.postViewInfoSide}
          display={{xs: 'block', sm: 'none', lg: 'none'}}
        >
          <List>
            <Grid
              container
              spacing={2}
              className={classes.postViewInfoSideActions}
            >
              <Grid item>
                <IconButton
                  edge='start'
                  color='inherit'
                  style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
                >
                  <AppsIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  edge='start'
                  color='inherit'
                  style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
                >
                  <NotificationsIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  edge='start'
                  color='inherit'
                  style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider component='li' />
            <ListItem>
              <ListItemText
                color='text.secondary'
                primary={title}
                secondary={price + '$'}
              />
            </ListItem>
            <li>
              <Typography
                sx={{mt: 0.5, ml: 2}}
                color='text.secondary'
                display='block'
                variant='caption'
                fontSize='18px'
              >
                Details
              </Typography>
            </li>
            <Grid
              container
              alignItems='center'
              paddingLeft={'15px'}
              paddingRight={'15px'}
            >
              <Grid item xs>
                <Typography gutterBottom variant='caption' component='div'>
                  condition
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant='caption' component='div'>
                  used - Like new
                </Typography>
              </Grid>
            </Grid>
            <li>
              <Typography
                sx={{mt: 0.5, ml: 2}}
                color='text.secondary'
                display='block'
                variant='caption'
                fontSize='17px'
              >
                {description}
              </Typography>
            </li>
            <ListItem>
              <ListItemText
                color='text.secondary'
                primary={'America'}
                secondary={'location is approximate'}
              />
            </ListItem>
            <Divider component='li' />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={owner} secondary={date} />
            </ListItem>
            <Divider component='li' />
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostView;
