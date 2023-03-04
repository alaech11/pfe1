import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import BarChartU from "../../components/BarChartU";
import { Link } from 'react-router-dom';
const BarU = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="80vh">
        <BarChartU />
      </Box>
      <br/>
      <Link   to='/User' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
    </Box>
  );
};

export default BarU;