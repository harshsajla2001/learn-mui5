import { Button, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Search } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Feed({searchDrink}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  } 

  

 

  return (
    <>
      {
        searchDrink.map((searchDrink) => {
          const { idDrink, strDrink, strDrinkThumb, strInstructions, strAlcoholic, strGlass } = searchDrink
          return <Card key={idDrink} >
            <CardMedia
              component="img"
              alt="green iguana"
              height="500px"
              image={strDrinkThumb}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {strDrink}
              </Typography>
              <Chip label={strAlcoholic} />
              <Chip label={strGlass} />
            </CardContent>
            <CardActions disableSpacing>
            
              <IconButton aria-label="add to favorites">
                <FavoriteIcon fontSize="large" sx={{ color: "red" }} />
              </IconButton>
              <Button size="small">Learn More</Button>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>how to serve:</Typography>
                <Typography paragraph>
                  {strInstructions}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        })
      }
    </>
  );
}

export default Feed