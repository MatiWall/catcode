import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';


import AboutComponent from './about';
import LinkComponent from './links';

import {useApiFetch} from '@catcode/core-api';
import {DependencyGraph} from '@catcode/dependencies';
import { useApplication } from './context';
import { useAppConfig } from '@catcode/core-components';
const Dependencies = () => {
    const config = useAppConfig();
    
    const apiFetch = useApiFetch(config.plugins.dependencies.url);
    const { system, application, deployableUnit } = useParams();
    const [dependencies, setDependencies] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetch(`dependencies/${system}/${application}/${deployableUnit}`, 'GET');
                setDependencies(data); // Assuming the API returns an array of catalog items
            } catch (error) {
                console.error('Error fetching catalog data:', error);
            }
        };

        fetchData();
    }, [system, application, deployableUnit]);

    return <DependencyGraph data={dependencies} />

}


const ApplicationOverviewPage = () => {
    const config = useApplication();

    return (
        <Box sx={{ display: 'flex' }}>
            <Box style={{ 'width': '50%', 'marginRight': '1rem' }}>
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
            </Box>
            <Box style={{ 'width': '50%', 'marginLeft': '1rem' }}>
                <Dependencies />
            </Box>
        </Box>

    );
}


export default ApplicationOverviewPage;