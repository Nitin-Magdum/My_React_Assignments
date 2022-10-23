import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Poster2 from './poster2.jpeg' ;

export default function MediaControlCard() {
  
  return (
    <div style={{display:'flex'}}>
    <Card sx={{ display: 'flex' , textAlign:'left'  }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontSize:'25px'}}>
            Featured post
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Nav 11
          </Typography>
          <br/>
          <Typography component="div" varient="subtitle1">
            This is a wider card with supporting text below as <br/>a natural lead into additional content .
            <br/><br/>
            <a href="#">continue reading ..</a>
          </Typography>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 ,height:250 ,marginLeft:'35px'}}
        image={Poster2}
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{ display: 'flex' , textAlign:'left' ,marginLeft:'100px' ,alignItems:'right'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontSize:'25px'}}>
            Post title
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Nav 12
          </Typography>
          <br/>
          <Typography component="div" varient="subtitle1">
            This is a wider card with supporting text below as <br/>a natural lead into additional content .
            <br/><br/>
            <a href="#">continue reading ..</a>
          </Typography>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 ,height:250 ,marginLeft:'35px',alignContent:'right'}}
        image={Poster2}
        alt="Live from space album cover"
      />
    </Card>
    </div>

    
    
  );
}
