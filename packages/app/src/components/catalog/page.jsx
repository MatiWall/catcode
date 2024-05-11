import { useApplication, ApplicationProvider } from "@catcode/catalog"
import { isCatDocsAvailable } from "@catcode/catdocs"
import { useApiFetch } from "@catcode/core-api"
import { RoutingSwitch, useAppConfig } from "@catcode/core-components"
import { isDependenciesAvailable } from "@catcode/dependencies"
import { useState, useEffect } from "react"
import {Outlet, useParams} from 'react-router-dom'


const IndecPage = () => {

    
    const entity = useApplication();

    return (
        <>
            <RoutingSwitch>
                <RoutingSwitch.Item key={'/'} label={'Overview'} value={''}></RoutingSwitch.Item>
                <RoutingSwitch.Item key={'dependencies'} label={'Dependencies'} value={'dependencies'} active={isDependenciesAvailable(entity)}></RoutingSwitch.Item>
                <RoutingSwitch.Item key={'docs'} label={'Docs'} value={'docs/*'} active={isCatDocsAvailable(entity)}></RoutingSwitch.Item>
            </RoutingSwitch>
            <Outlet/>
        </>
    )
}

const CatalogIndecPage = () => {
    const { system, application, deployableUnit} = useParams();
    const basePath = `/catalog/${system}/${application}/${deployableUnit}/`;

    const config = useAppConfig();

    const apiFetch = useApiFetch(config.coreApi);

    const [catalog, setCatalog] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetch(basePath, 'GET');
                setCatalog(data); // Assuming the API returns an array of catalog items
            } catch (error) {
                console.error('Error fetching catalog data:', error);
            }
        };

        fetchData();
    }, [system, application, deployableUnit]);

    return (
        <ApplicationProvider application={catalog}>
            <IndecPage></IndecPage>
        </ApplicationProvider>
    )
}




export default CatalogIndecPage;