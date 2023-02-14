import { Box, Button, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
function Feed({searchDrink, getDrinksBySearch  }){
  // console.log(searchDrink," feed wala console ")
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  } 
  return (
    <Box flex={4} p={4}>
      {
        searchDrink.map((searchDrinks) => {
          const { idDrink, strDrink, strDrinkThumb, strInstructions, strAlcoholic, strGlass } = searchDrinks
          return <Card key={idDrink} >
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{maxHeight:"350px"}}
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
    </Box>
  );
}

export default Feed