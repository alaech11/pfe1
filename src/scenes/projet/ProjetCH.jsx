import { Box, Typography, useTheme, Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../components/data/mockData";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';

const ProjetCH = () => {
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
      headerName: "Nombre obligatoire de personnes",
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
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
   
  ];

  return (
    <Box m="20px">
      <Header title="Projet" subtitle="Liste des Projet Suggérer" />
      <Box
        m="40px 0 0 0"
        height="75vh"
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
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
      <br/>
      
      <Link   to='/User' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
    </Box>
  );
};

export default ProjetCH;