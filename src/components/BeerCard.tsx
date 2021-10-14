import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from './styles';

export default function BeerCard({image, brewers_tips, alcohol, name, count, food, id, onDelete}: any) {
  const classes = useStyles();
  return (
    <Card className={classes.beerCard}>
      <img
        className={classes.beerImg}
        src={image}
        alt='beerImg'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Brewers tips: </strong>{brewers_tips}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Count: </strong>{count ? count : 0}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Alcohol: </strong>{alcohol}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Food pairing: </strong>{food && `${food[0]}, ${food[1]}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button onClick={() => onDelete(id)} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}