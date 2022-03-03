import {Grid} from '@mui/material';
import React from 'react';
import Post from './Post';

const Feed = ({posts}) => {
  return (
    <Grid
      container
      spacing={{xs: 2, md: 3}}
      columns={{xs: 4, sm: 8, md: 12}}
    >
      {posts.map((data) => (
        <Grid item xs={2} xm={4} sm={2.6} key={data.URL}>
          <Post
            URL={data.URL}
            date={data.Date_Time}
            title={data.productName}
            price={data.price}
            description={data.Description}
            owner={data.userName}
            category={data.category}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
