import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import BarChartE from "../../components/BarChartE";
import { Link } from 'react-router-dom';
const BarE = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="80vh">
        <BarChartE />
      </Box>
      <br/>
      <Link   to='/Enseignant' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
    </Box>
  );
};

export default BarE;