import React from 'react';
import { 
    Grid, 
    Paper, 
    Card, 
    CardHeader, 
    CardContent, 
    Typography, 
    Button, 
    Link, 
    Divider, 
    Chip 
} from '@mui/material';


import { FaGithub } from "react-icons/fa";
import BaseCard from '../../../../core-components/src/components/block';

import { IconSelector } from '@catcode/core-components'
import { useApplication } from './context';



const Item = ({ header, body }) => {
    return (
        <>
            <Typography variant="h6">{header}</Typography>
            <div>
                <Typography variant="body1">{body}</Typography>
            </div>
        </>
    )
}


const About = () => {
    const entity = useApplication();

    const metadata = entity?.metadata || {};
    const spec = entity?.spec || {};

    return (
        <BaseCard>
            <CardHeader
                title="About"
                subheader={
                    <Typography variant="body1" color="textSecondary" component="div">
                        <nav>
                            Add links here
                        </nav>
                    </Typography>
                }
            />
            <Divider />
            <CardContent>

                <Item header='Description' body={metadata?.description} />
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item xs={4}>
                        <Item header='Owner' body={spec?.owner} />
                    </Grid>
                    <Grid item xs={4}>
                        <Item header='Lifecycle' body={spec?.lifecycle} />
                    </Grid>
                    <Grid item xs={12}>
                        <Item header='Tags' body={metadata?.tags && metadata?.tags.map((tag) => <Chip label={tag} />)} />
                    </Grid>
                </Grid>
            </CardContent>
        </BaseCard>
    );
};

export default About;
