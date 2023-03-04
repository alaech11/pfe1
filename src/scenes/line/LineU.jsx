import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import LineChartU from "../../components/LineChartU";
import { Link } from 'react-router-dom';
const LineU = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChartU />
      </Box>
      <br/>
      <Link   to='/User' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
    </Box>
  );
};

export default LineU;