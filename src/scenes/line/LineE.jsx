import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChartE";
import { Link } from 'react-router-dom';
const LineE = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
      <br/>
      <Link   to='/Enseignant' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
    </Box>
  );
};

export default LineE;