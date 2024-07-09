import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

// Exempeldata för tabellen
const rows: GridRowsProp = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 35 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', age: 32 },
  { id: 3, firstName: 'James', lastName: 'Smith', age: 28 },
  { id: 4, firstName: 'Emily', lastName: 'Johnson', age: 24 },
];

// Kolumndefinitioner för tabellen
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 90 },
];

// Stildefinitioner med hjälp av makeStyles
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 400,
    marginTop: 20,
  },
});

const TabellDesign: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper className={classes.root}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>
    </div>
  );
};

export default TabellDesign;
