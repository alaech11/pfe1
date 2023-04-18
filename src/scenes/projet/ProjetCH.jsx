import { Box, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, {useEffect, useState} from "react";


const ProjetCH = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setProjetCHList(result))
    .catch(error => console.log(error))
  },[])
  const [projetCHList ,setProjetCHList] = useState([]);


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Nom de Sujet",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "number",
      headerName: "Nombre du personnes",
      flex: 1,
    },
    {
      field: "desp",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "filière",
      headerName: "Filière",
      flex: 1,
      
    },
    {
      field: "reponse",
      headerName: "Reponse",
      flex: 1,
    },
   
  ];

  return (

  
    <Box m="20px">
      <Header title="Projet" subtitle="Liste des Projet Choisis" />
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
        <DataGrid checkboxSelection rows={projetCHList} columns={columns} />
      </Box>

    </Box>
  );
};

export default ProjetCH;