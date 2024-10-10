import React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {useTheme} from '@mui/material/styles'

const TemplateCardGroup = ({
    title,
    warning,
    cards
})=> {

    const theme = useTheme();
    return (
        <>
            <Typography variant={'h4'}>
                {title}
            </Typography>
            <Typography 
                variant={'subtitle2'}
                style={{
                    color: theme.palette.warning.main,
                    marginBottom: theme.spacing(3)
                }}
            >
                {warning}
            </Typography>
            <Grid container
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: theme.spacing(2),
                }}
                justifyContent={'flex-start'}
            >
                {cards}
            </Grid>

        </>
    )
}

export default TemplateCardGroup;