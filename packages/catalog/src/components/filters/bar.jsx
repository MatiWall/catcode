import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';


import {DropDown, DropDownMulti} from '@catcode/core-components';


const createOptions = (options) =>  options.map((option) => ({label: option, value: option}))

  export default function FilterBar({onChange, types = [], systems = [], lifecycles = [], tags = []}) {
    const [type, setType] = useState([]); 
    const [system, setSystem] = useState([]); 
    const [lifecycle, setLifecycle] = useState([]); 
    const [tag, setTags] = useState([]); 

    useEffect(()=> {
        const updatedFilters = [
            { attribute: 'type', values: type },
            { attribute: 'system', values: system },
            { attribute: 'lifecycle', values: lifecycle },
            { attribute: 'tags', values: tag }
          ].filter(filter => filter.values.length > 0);
        
        onChange(updatedFilters);

    }, [type, system, lifecycle, tag]); 

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                    <DropDownMulti options={createOptions(systems)} value={system} onChange={setSystem} label={'System'}></DropDownMulti>
                </Grid>
                <Grid item xs={12}>
                    <DropDownMulti options={createOptions(lifecycles)} value={lifecycle} onChange={setLifecycle} label={'Life Cycle'}></DropDownMulti>
                </Grid>
                <Grid item xs={12}>
                    <DropDownMulti options={createOptions(types)} value={type} onChange={setType} label={'Type'}></DropDownMulti>
                </Grid>
                <Grid item xs={12}>
                    <DropDownMulti 
                    options={createOptions(tags)} 
                    value={tag} 
                    onChange={setTags} 
                    label={'Tag'}
                    renderValue={
                        (selected) => selected.map((value) => (
                        <Chip key={value} label={value} />)
                      )}
                    ></DropDownMulti>
                </Grid>
            </Grid>
        </Box>
    );
}