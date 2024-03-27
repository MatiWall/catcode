import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


import ApplicationOverviewPage from './overview'

import { useApiFetch } from '@catcode/core-api';
import { PageWithHeader, useAppConfig } from '@catcode/core-components';
import { ApplicationProvider } from './context';

export default function ApplicationPage() {
    const basePath = useLocation().pathname;
    const { system, application, deployableUnit } = useParams();

    const config = useAppConfig();

    const apiFetch = useApiFetch(config.coreApi.url);

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetch(`catalog/${system}/${application}/${deployableUnit}`, 'GET');
                setCatalog(data); // Assuming the API returns an array of catalog items
            } catch (error) {
                console.error('Error fetching catalog data:', error);
            }
        };

        fetchData();
    }, [system, application, deployableUnit]);

    const pages = [
        { url: '', name: 'Overview', component: <ApplicationOverviewPage dependency_url={config.plugins.dependencies.url}></ApplicationOverviewPage> },
        { url: 'docs/', name: 'Docs', component: <div>test page</div> },
    ];


    return (
        <ApplicationProvider application={catalog}>
            <PageWithHeader pages={pages} basePath={basePath}></PageWithHeader>
        </ApplicationProvider>
    );
}
