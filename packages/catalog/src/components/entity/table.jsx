import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { Chip} from '@mui/material'


import { 
  DataTable,
  addSpacesToCamelCase,
  capitalizeWords
} from '@catcode/core-components';


export default function EntityTable({data}) {

  let columns = [];

  if (data && data.length > 0) {
    columns = Object.keys(data[0]).map((col) => ({
      column: col,
      label: capitalizeWords(addSpacesToCamelCase(col))
    }));

  }
 
  const catalogData = data.map((row) => ({
    ...row,
    deployableUnit: <Link to={`/catalog/${row.system}/${row.application}/${row.deployableUnit}`}>{row.deployableUnit}</Link>
  
  }))

  return (
    <DataTable 
    data={catalogData} 
    columns={columns}
    renderValue={{
      tags:  (tags) => tags.map(
        (value) => (<Chip key={value} label={value} />
        ))
    }}
    />
   
  );
}
