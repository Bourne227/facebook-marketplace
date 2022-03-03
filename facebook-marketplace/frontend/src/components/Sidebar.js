import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Categories from './Categories';

const styles = makeStyles({
  sidebar: {
    padding: '10px',
  },
});

const Sidebar = ({setposts}) => {
  const classes = styles();
  return (
    <div className={classes.sidebar}>
      <Categories setposts={setposts} />
    </div>
  );
};

export default Sidebar;
