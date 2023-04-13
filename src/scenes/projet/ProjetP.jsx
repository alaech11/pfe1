import { Box, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { MyProSidebarProviderE } from "../global/SidebarContextE";
import React, {useEffect, useState} from "react";


const ProjetP = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setProjetList(result))
    .catch(error => console.log(error))
  },[])
  const [projetList ,setProjetList] = useState([]);




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
      field: "date",
      headerName: "Date",
      flex: 1,
    },
   
  ];

  return (

  <MyProSidebarProviderE> 
    <Box m="20px">
      <Header title="Projet" subtitle="Liste des Projet Suggérer" />
       <Box
        mr="-915px"
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
        <DataGrid checkboxSelection rows={projetList} columns={columns} />
      </Box>
   
    </Box> </MyProSidebarProviderE>
  );
};

export default ProjetP;