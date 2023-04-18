import { Box, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, {useEffect, useState} from "react";

//import axios from 'axios';

const ProjetP = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setProjetList(result))
    .catch(error => console.log(error))
  },[])
  const [projetList ,setProjetList] = useState([]);/*row */


  const handleRowUpdate = (params) => {
    const updatedRows = projetList.map((row) => {
      if (row.id === params.id) {
        return { ...row, [params.field]: params.value };
      }
      return row;
    });
    setProjetList(updatedRows);
    updateRowInDatabase(params.id, params.field, params.value); // Call API to update row in the database
  };

  const handleRowDelete = (params) => {
    const filteredRows = projetList.filter((row) => row.id !== params.id);
    setProjetList(filteredRows);
    deleteRowFromDatabase(params.id); // Call API to delete row from the database
  };

  const updateRowInDatabase = (id, field, value) => {
    // Make API call to update row in the database using id, field, and value
   // axios.put(`/api/rows/${id}`, { [field]: value });
  };

  const deleteRowFromDatabase = (id) => {
    // Make API call to delete row from the database using id
 //axios.delete(`/api/rows/${id}`);
  };



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Nom de Sujet",
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true
    },
    {
      field: "number",
      headerName: "Nombre du personnes",
      flex: 1,
      editable: true
    },
    {
      field: "desp",
      headerName: "Description",
      flex: 1,
      editable: true
    },
    {
      field: "filière",
      headerName: "Filière",
      flex: 1,
      editable: true
     
    },
    {
      field: "delete",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <div>
            <button onClick={() => handleRowDelete(params)}>Delete</button>
          </div>
        );
      }
    },
   
  ];

  return (


    <Box m="20px">
      <Header title="Projet" subtitle="Liste des Projet Suggérer" />
       <Box
        height="55vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={projetList} columns={columns}  editMode="cell"
        onEditCellChangeCommitted={handleRowUpdate} />
      </Box>
   
    </Box>
  );
};

export default ProjetP;