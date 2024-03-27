import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


import ApplicationOverviewPage from './overview'

import { useApiFetch } from '@catcode/core-api';
import { PageWithHeader, useAppConfig, usePlugins } from '@catcode/core-components';
import { ApplicationProvider } from './context';

function buildPages(config, catalog) {
    let pages = [
        { 
            url: '', 
            name: 'Overview', 
            component: <ApplicationOverviewPage dependency_url={config.plugins.dependencies.url} />
        },
        //{ url: 'docs/', name: 'Docs', component: <div>test page</div> },
    ];

    // Check if catalog is empty or metadata is undefined, if so, return early
    if (!catalog || !catalog.metadata) return pages;

    // Assuming usePlugins hook works fine here
    let plugins = usePlugins();

    // Filter plugins to include only those of type 'catalogPlugin'
    plugins = plugins.filter((plugin) => plugin.type === 'catalogPlugin');

    // Get annotation keys
    const annotation_keys = Object.keys(catalog.metadata.annotations);

    // Iterate through annotation keys
    for (const key of annotation_keys) {
        // Find plugins matching the annotation
        const matchingPlugins = plugins.filter((plugin) => plugin.annotation === key);

        // Process matching plugins
        for (const matchingPlugin of matchingPlugins) {

            // Add a new page for each matching plugin
            pages.push({
                url: matchingPlugin.path, // Assuming path is specified in the plugin
                name: matchingPlugin.name, // Use annotation as the name
                component: matchingPlugin.plugin // Use the plugin component
            });
        }
    }
    return pages;
}


export default function ApplicationPage() {
    const basePath = useLocation().pathname;
    const { system, application, deployableUnit} = useParams();

    const config = useAppConfig();

    const apiFetch = useApiFetch(config.coreApi.url);

    const [catalog, setCatalog] = useState({});

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

    const pages = buildPages(config, catalog);

    return (
        <ApplicationProvider application={catalog}>
            <PageWithHeader pages={pages} basePath={basePath}></PageWithHeader>
        </ApplicationProvider>
    );
}
