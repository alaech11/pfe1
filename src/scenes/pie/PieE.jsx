import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import PieChartE from "../../components/PieChartE";
import { Link } from 'react-router-dom';
const PieE = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChartE />
      </Box>
      <br/>
      <Link   to='/Enseignant' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
    </Box>
  );
};

export default PieE;