import React from 'react';
import Button from '@mui/material/Button';

import BeerCard from './BeerCard';
import useStyles from './styles';

export default function ListItems({ loadBeers, data, beerDelete, sortByName, sortByCount }: any) {
  React.useEffect(() => {
      loadBeers();
  }, [loadBeers]);
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <Button onClick={() => sortByName()}>Sort by name</Button>
        <Button onClick={() => sortByCount()}>Sort by count</Button>
      </div>
      <div className={classes.wrapper}>
        {Array.isArray(data) && data.length > 0 && data.map((beer, idx) => (
          <div className={classes.beerCard} key={beer.id}>
            <BeerCard 
              image={beer.image_url}
              brewers_tips={beer.brewers_tips}
              name={beer.name}
              id={idx}
              count={beer.ebc}
              alcohol={beer.abv}
              food={beer.food_pairing}
              onDelete={beerDelete}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
