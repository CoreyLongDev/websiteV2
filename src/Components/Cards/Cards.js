import "./cards.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Cards(props) {

    return (
        <div className="cardflex">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="175"
            image={props.imgURL}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.info}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={props.githubLink}>GitHub</Button>
            <Button size="small" href={props.LiveSite}>liveSite</Button>
          </CardActions>
        </Card>
        </div>
      );
    }

export default Cards;