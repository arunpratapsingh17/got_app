import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({item,index}) {
  index=index+1
  const link = `${index}`
  return (
    <Card  sx={{ maxWidth: 345 ,height:100,position:'relative', zIndex:3,flex:1}}>
      <Link to={item?.toLink || link} style={{textDecoration:'none',color:'black'}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={      {fontStyle:'bold',textDecoration:'none'}}>
                {item?.tag || item?.name || item?.aliases}
            </Typography>
          </CardContent>
        </CardActionArea>
     </Link>
    </Card>
  );
}