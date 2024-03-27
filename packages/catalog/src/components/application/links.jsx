import React from 'react';
import { Grid, Paper, Card, CardHeader, CardContent, Typography, Button, Divider, Chip } from '@mui/material';

import { Link } from 'react-router-dom';
import BaseCard from '../../../../core-components/src/components/block';

import { IconSelector } from '@catcode/core-components';




const LinkComponent = ({ links }) => {
    return (
        <BaseCard>
            <CardHeader title='Links'>

            </CardHeader>
            <CardContent>
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
                    {links.map((link) => (
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <IconSelector iconName={'internet'} />
                                <a href={link.url} target="_blank" rel="noopener">{link.title}</a>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </CardContent>
        </BaseCard>
    );
};

export default LinkComponent;