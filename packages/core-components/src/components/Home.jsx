"use client";
import * as React from 'react'

import { useEffect, useState } from 'react';

import { Box } from '@mui/material';


import { StatComponent, BaseCard, useAppConfig } from '@catcode/core-components'
import { useApiFetch } from '@catcode/core-api';
import { DependencyGraph } from '@catcode/dependencies';


export default function HomePage() {
    const appConfig = useAppConfig();
    const apiFetch = useApiFetch(appConfig.coreApi.url);
    const apiFetchDependencies = useApiFetch(appConfig.plugins.dependencies.url);
    const [dependencies, setDependencies] = useState([]);
    const [statistics, setStatistics] = useState({});




    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetchDependencies('dependencies', 'GET');
                setDependencies(data); // Assuming the API returns an array of catalog items

            } catch (error) {
                console.error('Error fetching catalog data:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetch('statistics', 'GET');
                setStatistics(data); // Assuming the API returns an array of catalog items
            } catch (error) {
                console.error('Error fetching catalog data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <Box
                sx={{ display: 'flex', marginBottom: '10px'}}
            >
                <StatComponent title={'Systems'} value={statistics?.systems} style={{marginRight: '2.5px'}}/>
                <StatComponent title={'Applications'} value={statistics?.applications} style={{marginRight: '2.5px', marginLeft: '2.5px'}}/>
                <StatComponent title={'Deployable Units'} value={statistics?.deployableUnits} style={{marginLeft: '2.5px'}}/>
            </Box>
            <Box width='100%' height='100%'>
                <BaseCard width='100%' height='100%'>
                        <DependencyGraph data={dependencies} />
                </BaseCard>
            </Box>
        </>

    );
}