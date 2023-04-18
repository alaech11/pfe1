import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, {useEffect, useState} from "react";

const TeamE = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setUserList(result))
    .catch(error => console.log(error))
  },[])
  const [userList ,setUserList] = useState([]);



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {field: "id", headerName: "ID" },
    {field: "name", headerName: "Nom", flex: 1, cellClassName: "name-column--cell",},
    {field: "groupe",headerName: "Goupe id ",type: "number",headerAlign: "left",align: "left", },
    {field: "phone", headerName: "Phone Number", flex: 1, },
    { field: "email", headerName: "Email", flex: 1,},
    { field: "accessLevel", headerName: "Access Level", flex: 1,},
  ];

  return (
    
 
      
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        height="65vh"
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
        <DataGrid checkboxSelection rows={userList} columns={columns} />
      </Box>
     
    </Box>
   
  );
};

export default TeamE;