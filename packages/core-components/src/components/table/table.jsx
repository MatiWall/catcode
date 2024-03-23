import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createCatalogRow(row, columns, renderValue) {
    console.log(renderValue)
    return (
      <TableRow key={Object.values(row).join(', ')} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {columns.map((col) => (
          <TableCell key={col}>
           {renderValue && renderValue[col.column] ? renderValue[col.column](row[col.column]) : row[col.column]}
            </TableCell>
        ))}
      </TableRow>
    );
  }
  
  export default function DataTable({data, columns, renderValue = {}}) {

    return (
      <TableContainer component={Paper} style={{width: '100%'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.column}>{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              createCatalogRow(row, columns, renderValue)
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }