import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

const TemplateCard = ({
    title,
    description,
    tags,
    type
}) => {
    const theme = useTheme(); // Access the theme

    return (
        <Card sx={{width: '18rem'}}>
            <CardHeader
            style={{
                backgroundColor: theme.palette.primary.main, // Use theme color
                color: theme.palette.common.white, // Use theme text color
                padding: theme.spacing(2), // Use theme spacing
                borderBottom: `1px solid ${theme.palette.divider}`, // Use theme divider color
                height: '2rem'
            }}
            title={title}
            subheader={type}
            >
            </CardHeader>
            <CardContent
                style={{
                    height: '10rem',
                    textOverflow: 'elipse'
                }}
            >
                    <Typography  noWrap={true} style={{marginBottom: '0.4rem'}}>
                        {tags?.map((tag) => <Chip label={tag} variant={'outlined'} style={{marginRight: '0.4rem'}}/>)}
                    </Typography>
                   

                    <Typography 
                        variant={'body'}
                    >
                        {description}
                    </Typography>
                     
            </CardContent>
            <CardActions style={{float: 'right', height: '2rem'}}>
                <Button>
                    Choose
                </Button>
            </CardActions>
        </Card>
    )
}


export default TemplateCard;