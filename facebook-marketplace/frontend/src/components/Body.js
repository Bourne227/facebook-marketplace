import {Button, Grid, Typography} from '@mui/material';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Actions from './Actions';
import {LocationOn} from '@mui/icons-material';
import Feed from './Feed';
import CategoryListItem from './CategoryListItem';

const styles = makeStyles({
  body: {
    padding: '10px',
    backgroundColor: '#fff',
  },
  feed_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  select_feed_info_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  ShopByCategory_container: {
    borderRadius: '5px',
    margin: '0px',
    padding: '5px',
    border: '2px solid lightgray',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  CategoriesList: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
});

const Body = ({posts, setposts}) => {
  const classes = styles();
  return (
    <div className={classes.body}>
      <Grid display={{xs: 'block', sm: 'none', lg: 'none'}}>
        <Actions setposts={setposts} />
      </Grid>
      <Grid display={{xs: 'none', sm: 'block', lg: 'block'}}>
        <div className={classes.ShopByCategory_container}>
          <Typography variant='h5' fontWeight='bold'>
            Shop By Category
          </Typography>
          <div className={classes.CategoriesList}>
            <CategoryListItem title={'Car'} />
            <CategoryListItem title={'House'} />
            <CategoryListItem title={'Books'} />
            <CategoryListItem title={'Electronics'} />
          </div>
        </div>
      </Grid>
      <hr color={'#e4e6ea'} />
      <div className={classes.feed_container}>
        <div className={classes.select_feed_info_container}>
          <Typography variant='h6'>Today's Picks</Typography>
          <Button size='small' startIcon={<LocationOn />}>
            Select Location
          </Button>
        </div>
        <Feed posts={posts} />
      </div>
    </div>
  );
};

export default Body;
