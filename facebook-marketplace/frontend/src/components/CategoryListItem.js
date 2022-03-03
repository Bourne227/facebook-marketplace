import {IconButton, Typography} from '@mui/material';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
  Category: {
    'borderRadius': '20px',
    'padding': '5px',
    'paddingLeft': '20px',
    'width': '100%',
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'start',
    '&:hover': {
      backgroundColor: '#e4e6ea',
    },
  },
  Category2: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    fontWeight: 'bold',
    backgroundColor: '#e4e6ea',
    color: 'black',
    borderRadius: '15px',
    marginLeft: '5px',
    padding: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  IconButton: {
    'backgroundColor': '#e4e6ea',
    'marginRight': '10px',
    '&:hover': {
      backgroundColor: '#blue',
    },
  },
});

const CategoryListItem = ({title, Icon, func}) => {
  const classes = styles();
  return (
    <>
      {Icon ? (
        <div onClick={func} className={classes.Category}>
          <IconButton
            style={{backgroundColor: '#e4e6ea', marginRight: '10px'}}
          >
            {Icon && <Icon />}
          </IconButton>
          <Typography variant='body1' fontWeight='bold'>
            {title}
          </Typography>
        </div>
      ) : (
        <div onClick={func} className={classes.Category2}>
          <Typography variant='body1' fontWeight='bold'>
            {title}
          </Typography>
        </div>
      )}
    </>
  );
};

export default CategoryListItem;
