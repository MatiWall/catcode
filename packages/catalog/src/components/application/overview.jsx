import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';


import AboutComponent from './about';
import LinkComponent from './links';


const ApplicationOverviewPage = ({ config }) => {

    return (
        <Box style={{ 'width': '100%' }}>

            <Box
                sx={{
                    width: '100%',
                    padding: '8px',
                    margin: '4px'
                }}
            >
                <AboutComponent metadata={config.metadata} spec={config.spec}></AboutComponent>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    padding: '8px',
                    margin: '4px'
                }}
            >
                {config?.metadata?.links ? (
                    <LinkComponent links={config.metadata.links.filter(link => !link.icon)} />
                ) : null}
            </Box>
        </Box>
    );
}


export default ApplicationOverviewPage;