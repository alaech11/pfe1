import { Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import React, {useEffect, useState} from "react";
//import Header from "../../components/Header";
//import { Link } from 'react-router-dom';

const RequestE = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setReqEList(result))
    .catch(error => console.log(error))
  },[])
  const [reqEList ,setReqEList] = useState([]);


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Demander à rejoindre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
   
    {
      field: "filière",
      headerName: "Filière",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      ),
    },
 {
      field: "action",
      headerName: "Votre répondre",
      flex: 1,
    },
   
  ];

  return (
 
      
      <Box
        m="40px 0 0 0"
        height="32.5vh"
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
        <DataGrid checkboxSelection rows={reqEList} columns={columns} />
      </Box>
    
  );
};

export default RequestE;