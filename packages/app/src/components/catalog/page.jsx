import { useApplication, ApplicationProvider } from "@catcode/catalog"
import { isCatDocsAvailable } from "@catcode/catdocs"
import { useApiFetch } from "@catcode/core-api"
import { RoutingSwitch, SwitchItem, useAppConfig } from "@catcode/core-components"
import { isDependenciesAvailable } from "@catcode/dependencies"
import { useState, useEffect } from "react"
import {Outlet, useParams} from 'react-router-dom'

const IndecPage = () => {

    
    const entity = useApplication();
    return (
        <>
            <RoutingSwitch>
                <SwitchItem key={'/'} label={'Overview'} value={'/'}></SwitchItem>
                <SwitchItem key={'dependencies'} label={'Dependencies'} value={'/dependencies'} active={isDependenciesAvailable(entity)}></SwitchItem>
                <SwitchItem key={'docs'} label={'Docs'} value={'docs/*'} active={isCatDocsAvailable(entity)}></SwitchItem>
            </RoutingSwitch>
            <Outlet/>
        </>
    )
}

const CatalogIndecPage = () => {
    const { system, application, deployableUnit} = useParams();
    const basePath = `/catalog/${system}/${application}/${deployableUnit}/`;

    const config = useAppConfig();

    const apiFetch = useApiFetch(import.meta.env.VITE_CORE_API_URL);

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