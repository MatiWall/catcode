import React from 'react';
import { Card, CardContent, Typography, Avatar, makeStyles, CardHeader } from '@mui/material';


const StatComponent = ({ title, value, style}) => {
  const default_style = {
  }

  return (
    <Card 
      sx={{width: '100%', height: '100%'}}
      style={{...default_style, ...style}}
    >
      <CardHeader title={<Typography variant="subtitle1">{title}</Typography>}/>
      <CardContent
        sx={{ textAlign: 'center' }}
      >
        <Typography variant="h3">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatComponent;
