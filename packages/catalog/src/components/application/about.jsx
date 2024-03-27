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


const AboutComponent = ({ metadata, spec }) => {
    return (
        <BaseCard>
            <CardHeader
                title="About"
                subheader={
                    <Typography variant="body1" color="textSecondary" component="div">
                        <nav>

                            {metadata?.links.filter((link => link?.icon)).map((link => (
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <IconSelector iconName={link.icon} />
                                    <Typography>{link.title}</Typography>
                                </Link>

                            )))}




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
                        <Item header='Tags' body={metadata?.tags.map((tag) => <Chip label={tag} />)} />
                    </Grid>
                </Grid>
            </CardContent>
        </BaseCard>
    );
};

export default AboutComponent;
