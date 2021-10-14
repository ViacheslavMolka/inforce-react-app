import React from 'react';
import Button from '@mui/material/Button';

import BeerCard from './BeerCard';
import useStyles from './styles';

export default function ListItems({ loadBeers, data, beerDelete }: any) {
  React.useEffect(() => {
      loadBeers();
  }, [loadBeers]);
  const classes = useStyles();
  const beers = data && data.slice(10);

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <Button>Sort by name</Button>
        <Button>Sort by count</Button>
      </div>
      <div className={classes.wrapper}>
        {Array.isArray(beers) && beers.length > 0 && beers.map((beer, idx) => (
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
