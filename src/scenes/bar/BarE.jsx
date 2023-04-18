import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChartE from "../../components/BarChartE";
const BarE = () => {
  return (

    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="80vh" >
        <BarChartE />
      </Box>
    </Box>
 
    
  );
};

export default BarE;