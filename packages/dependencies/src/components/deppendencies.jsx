import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useApiFetch } from "@catcode/core-api";
import { usePluginConfig } from "@catcode/core-plugin";
import DependencyGraph from "./networkChart";



const Dependencies = () => {
    const config = usePluginConfig();

    const apiFetch = useApiFetch(config.url);
    const { system, application, deployableUnit } = useParams();
    const [dependencies, setDependencies] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response, data } = await apiFetch(`/dependencies/${system}/${application}/${deployableUnit}`, 'GET');
                setDependencies(data); // Assuming the API returns an array of catalog items
                console.log(data)
            } catch (error) {
                console.error('Error fetching catalog data:', error);
            }
        };

        fetchData();
    }, [system, application, deployableUnit]);

    return <DependencyGraph data={dependencies} />

}


export default Dependencies;