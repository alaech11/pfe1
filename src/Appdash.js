
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import { MyProSidebarProviderE } from "./scenes/global/SidebarContextE";
import DashboardE from "./scenes/dashboard/DashboardE"

//import { Box } from "@mui/system";


/*import TeamE from "./scenes/team/TeamE";

import ProjetP from "./scenes/projet/ProjetP";
import AjoutP from "./scenes/form/AjoutP";
import CalendarE from "./scenes/calendar/indexE";
import Bar from "./scenes/bar/BarE";
import Pie from "./scenes/pie/PieE";
import Line from "./scenes/line/LineE";*/


function AppdashU() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyProSidebarProviderE>
        <div style={{ height: "100%", width: "100%", }}>
          <main>
            <Topbar />
            <Routes>
              <Route path="/" element={<DashboardE />} />

            </Routes>
          </main>
        </div>
      </MyProSidebarProviderE>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default AppdashU;