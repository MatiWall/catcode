import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


import ApplicationOverviewPage from './overview'

import {useApiFetch} from '@catcode/core-api';
import { PageWithHeader } from '@catcode/core-components';


export default function ApplicationPage({backend_url, dependency_url}) {
    const basePath = useLocation().pathname;
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

    const pages = [
        { url: '', name: 'Overview', component: <ApplicationOverviewPage config={catalog} dependency_url={dependency_url}></ApplicationOverviewPage> },
        { url: 'docs/', name: 'Docs', component: <div>test page</div>},
    ];


    return (
            <PageWithHeader pages={pages} basePath={basePath}></PageWithHeader>
    );
}
