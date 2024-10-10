import {useState, useEffect} from 'react';

import CatalogTable from './table';

import { CardHeader, Typography, CardContent, Divider, Button, Fab, Box, Grid } from '@mui/material';
import { BaseCard, filterTableData, useAppConfig } from '@catcode/core-components';
import FilterBar from '../filters/bar';
import { coreAPI } from '@catcode/core-api';



export default function EntityPage() {
    const [catalogData, setCatalogData] = useState([]);
    const [filteredCatalogData, setFilteredCatalogData] = useState([])
    const [filters, setFilters] = useState({});

    const core_api = coreAPI();

    useEffect(() => {

      async function getEntities(){
        const resources = await core_api.getResources('systems');
        console.log(resources);

      };

      getEntities();

    });
    
    
    

    /*
    const apiFetch = useApiFetch(appConfig.coreApi);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { response, data } = await apiFetch('/catalog', 'GET');
            
            const transformedData = data.apps.map((comp) => ({
              deployableUnit: comp.metadata.deployableUnit,
              application: comp.metadata.application,
              system: comp.metadata.system,
              type: comp.spec.type,
              owner: comp.spec.owner,
              lifecycle: comp.spec.lifecycle,
              tags: comp.metadata.tags
            }));
    
            setCatalogData(transformedData);
            setFilteredCatalogData(transformedData);
          } catch (error) {
            console.error('Error fetching catalog data:', error);
            // Handle error appropriately, e.g., show a message to the user
          }
        };
        
        fetchData();
      }, []);
    
      useEffect(() => {
        const data = filterTableData(catalogData, filters);
        setFilteredCatalogData(data);
      }, [filters]);
      */
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
               {/* <FilterBar 
                onChange={setFilters}
                systems={[... new Set(catalogData.map((row) => row.system))]}
                lifecycles={[... new Set(catalogData.map((row) => row.lifecycle))]}
                types={[... new Set(catalogData.map((row) => row.type))]}
                tags={[...new Set(catalogData.flatMap((row) => row.tags))]}
                />
                */}
            </Grid>
            <Grid item xs={12} md={9}>
                <BaseCard>
                        <CatalogTable data={filteredCatalogData}></CatalogTable>
                </BaseCard>
            </Grid>
        </Grid>
    );
}