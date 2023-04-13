import { Box} from "@mui/material";
import Header from "../../components/Header";
import BarChartU from "../../components/BarChartU";
import { MyProSidebarProviderU } from "../global/SidebarContextU";
const BarU = () => {
  return (
    <>
    <MyProSidebarProviderU>
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="80vh" mr="-900px">
        <BarChartU />
      </Box>
    </Box></MyProSidebarProviderU></>
  );
};

export default BarU;