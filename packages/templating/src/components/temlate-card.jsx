import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

const TemplateCard = ({
    name,
    description,
    tags,
    type
}) => {
    const theme = useTheme(); // Access the theme

    return (
        <Card sx={{maxWidth: '20rem', height: '20rem'}}>
            <CardHeader
            style={{
                backgroundColor: theme.palette.primary.main, // Use theme color
                color: theme.palette.common.white, // Use theme text color
                padding: theme.spacing(2), // Use theme spacing
                borderBottom: `1px solid ${theme.palette.divider}` // Use theme divider color
            }}
            title={name}
            subtitle={type}
            >
            </CardHeader>
            <CardContent>
                <Typography>
                {description}
                </Typography>
                {tags?.map((tag) => <Chip label={tag} />)}
            </CardContent>
            <CardActions style={{float: 'right'}}>
                <Button>
                    Choose
                </Button>
            </CardActions>
        </Card>
    )
}


export default TemplateCard;