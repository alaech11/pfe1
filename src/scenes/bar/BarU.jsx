import { Box} from "@mui/material";
import Header from "../../components/Header";
import BarChartU from "../../components/BarChartU";


const BarU = () => {
  return (
    
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="80vh" >
        <BarChartU />
      </Box>
    </Box>
  );
};

export default BarU;