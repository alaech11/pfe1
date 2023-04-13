
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import { MyProSidebarProviderU } from "./scenes/global/SidebarContextU";


//import { Box } from "@mui/system";
import DashboardU from "./scenes/dashboard/DashboardU"

/*import TeamE from "./scenes/team/TeamE"
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/calendar";*/


function AppdashU() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyProSidebarProviderU>
        <div style={{ height: "100%", width: "100%", }}>
          <main>
            <Topbar />
            <Routes>
              <Route path="/" element={<DashboardU />} />
              
            </Routes>
          </main>
        </div>
      </MyProSidebarProviderU>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default AppdashU;