import React from 'react';
import { Grid, Paper, Card, CardHeader, CardContent, Typography, Button, Divider, Chip } from '@mui/material';

import { Link } from 'react-router-dom';
import BaseCard from '../../../../core-components/src/components/block';

import { IconSelector } from '@catcode/core-components';
import { useApplication } from './context';



const EntityLink = ({icon, url, title}) => (
    <Grid item xs={2}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconSelector iconName={icon} />
            <a href={url} target="_blank" rel="noopener">{title}</a>
        </div>
    </Grid>
)

const EntityLinks = () => {
    const config = useApplication()
    const links = config?.metadata?.links || []

    return (
        <BaseCard>
            <CardHeader title='Links'>

            </CardHeader>
            <CardContent>
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
                    {links.map((link) => (
                        <EntityLink icon={link.icon} title={link.title} url={link.url}/>
                    ))}
                </Grid>

            </CardContent>
        </BaseCard>
    );
};

export default EntityLinks;