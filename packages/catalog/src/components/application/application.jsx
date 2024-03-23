'use client';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Box, Fab } from '@mui/material';


import ApplicationOverviewPage from './overview'

import {useApiFetch} from '@catcode/core-api';
import {DependencyGraph} from '@catcode/dependencies';

const Dependencies = ({url}) => {
    const apiFetch = useApiFetch(url);
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



export default function ApplicationPage({backend_url, dependency_url}) {
    const { system, application, deployableUnit } = useParams();

    const apiFetch = useApiFetch(backend_url);

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetch(`catalog/${system}/${application}/${deployableUnit}`, 'GET');
                console.log(data)
                setCatalog(data); // Assuming the API returns an array of catalog items
            } catch (error) {
                console.error('Error fetching catalog data:', error);
            }
        };

        fetchData();
    }, [system, application, deployableUnit]);


    return (
        <Box sx={{ display: 'flex' }}>
            <Box style={{ 'width': '50%', 'marginRight': '1rem'}}>
                <ApplicationOverviewPage config={catalog} />
            </Box>
            <Box style={{ 'width': '50%', 'marginLeft': '1rem' }}>
                <Dependencies url={dependency_url}/>
            </Box>
        </Box>
    );
}
