import React, {useEffect, useState} from "react";
import {Box,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import "./pages.css"







 function Projets(){
  
    
 /*
    const colums =[
        {dataField:'id', text: 'Id'},
        {dataField:'name', text: 'Name', sort: true, filter: textFilter()},
        {dataField:'username', text: 'Username',sort: true,filter: textFilter()},
        {dataField:'email', text: 'Email',sort: true,},
        {dataField: '', text: "Descreption"},
        {dataField: '', text: "filière",filter: textFilter()},
        {dataField: '', text: "Postuler"}
        
    ]

*/

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
    {field: "name", headerName: "Sujet", flex: 1, cellClassName: "name-column--cell",},
    {field: "eng",headerName: "Enseignat",headerAlign: "left",align: "left", },
    { field: "email", headerName: "Email", flex: 1,},
    {field: "descp", headerName: "Descreption", flex: 1, },
    {field: "fillere", headerName: "Filière", flex: 1, },
    { field: "postuler", headerName: "Postuler", flex: 1,},
  ];

   
    return (
        
        <>
        <img className="al" src='images/logoM.jpg' alt='logo'autoPlay loop muted/>
       
           
<div className="container-md">
   <div className="crud shadow-lg p-3 mb-5 mt-5  bg-body rounded">   
       
         
  

            <Box m="20px">
      <Header title="Projets de fin d'etude 2022/2023:"  />
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


  
                
               
        </div>
 </div>
   </>
    )
    
}

export default Projets;