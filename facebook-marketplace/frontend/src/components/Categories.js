import {Typography} from '@mui/material';
import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import All from '@mui/icons-material/SelectAll';
import HouseIcon from '@mui/icons-material/House';
import CategoryListItem from './CategoryListItem';
import BookIcon from '@mui/icons-material/Book';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
const styles = makeStyles({
  Categories_contanier: {
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  Category_List: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Category: {
    'padding': '5px',
    'paddingLeft': '20px',
    'width': '100%',
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'start',
    'cursor': 'pointer',
    '&:hover': {
      'backgroundColor': '#e4e6ea',
    },
  },
  IconButton: {
    'backgroundColor': '#e4e6ea',
    'marginRight': '10px',
    '&:hover': {
      backgroundColor: '#blue',
    },
  },
});

const Categories = ({setposts}) => {
  const [product, setProduct] = useState([]);
  const fetchDummys = (setDummys, setError) => {
    const item = localStorage.getItem('user');
    console.log(item);
    const user = JSON.parse(item);
    const bearerToken = user ? user.accessToken : '123';
    fetch('/v0/item', {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setError('');
        setDummys(json);
      })
      .catch((error) => {
        console.log(error);
        setDummys([]);
        setError(`${error.status} - ${error.statusText}`);
      });
  };
  const [dummys, setDummys] = React.useState([]);
  const [error, setError] = React.useState('Logged Out');
  console.log(error);
  useEffect(() => {
    console.log(product);
    fetchDummys(setDummys, setError);
    setProduct(dummys);
  }, []);
  const car = () => {
    const filter = dummys.filter((products) => {
      if (products.dtype === 'car') return products;
      else {
        return null;
      }
    });
    if (filter.length != 0) {
      setposts(filter[0].dvalue);
    }
  };

  const house = () => {
    const filter = dummys.filter((product) => {
      if (product.dtype === 'housing') return product;
      else {
        return null;
      }
    });
    if (filter.length != 0) {
      setposts(filter[0].dvalue);
    }
  };

  const electronics = () => {
    const filter = dummys.filter((product) => {
      if (product.dtype === 'estuff') return product;
      else {
        return null;
      }
    });
    if (filter.length != 0) {
      setposts(filter[0].dvalue);
    }
  };

  const book = () => {
    const filter = dummys.filter((product) => {
      if (product.dtype === 'estuff') return product;
      else {
        return null;
      }
    });
    if (filter.length != 0) {
      setposts(filter[0].dvalue);
    }
  };

  const all = () => {
    console.log(product);
    let products = [];
    for (let i = 0; i < dummys.length; i++) {
      products = products.concat(dummys[i].dvalue);
    }
    if (products.length != 0) {
      setposts(products);
    }
  };
  const classes = styles();

  return (
    <div className={classes.Categories_contanier}>
      <Typography variant='h6' fontWeight='bold'>
        Categories
      </Typography>
      <div className={classes.Category_List}>
        <CategoryListItem Icon={All} title={'All'} func={all} />
        <CategoryListItem
          Icon={DirectionsCarFilledIcon}
          title={'Car'}
          func={car}
        />
        <CategoryListItem Icon={HouseIcon} title={'House'} func={house} />
        <CategoryListItem Icon={BookIcon} title={'Books'} func={book} />
        <CategoryListItem
          Icon={PhoneAndroidIcon}
          title={'Electronics'}
          func={electronics}
        />
      </div>
    </div>
  );
};

export default Categories;
