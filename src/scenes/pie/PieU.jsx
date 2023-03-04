import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import PieChartU from "../../components/PieChartU";
import { Link } from 'react-router-dom';
const PieU = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChartU />
      </Box>
      <br/>
      <Link   to='/User' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
    </Box>
  );
};

export default PieU;