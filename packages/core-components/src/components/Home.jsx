"use client";
import * as React from 'react'

import { useEffect, useState } from 'react';

import { Box } from '@mui/material';


import { StatComponent, BaseCard, useAppConfig } from '@catcode/core-components'
import { useApiFetch } from '@catcode/core-api';


export default function HomePage() {
    const appConfig = useAppConfig();

    const apiFetch = useApiFetch(import.meta.env.VITE_CORE_API_URL);
    const [statistics, setStatistics] = useState({});



    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetch('/statistics', 'GET');
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
        </>

    );
}