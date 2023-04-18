
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import { MyProSidebarProviderE } from "./scenes/global/SidebarContextE";
import DashboardE from "./scenes/dashboard/DashboardE"
import TeamE from "./scenes/team/TeamE";
import ProjetP from "./scenes/projet/ProjetP";
import AjoutP from "./scenes/form/AjoutP";
import CalendarE from "./scenes/calendar/indexE";
import RendezvousE from './scenes/request/RendezvousE';
import DocumentEN from "./scenes/document/DocumentEN"
import Bar from "./scenes/bar/BarE";
import Line from "./scenes/line/LineE";



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
              <Route path="/teamE" element={<TeamE/>} />
           <Route path="/projetP" element={<ProjetP />} />
            <Route path="/ajoutP" element={<AjoutP />} />
             <Route path="/calendarE" element={<CalendarE />} />
              <Route path="/RendezvousE" element={<RendezvousE/>}/>
             <Route path="/documentEN" element={<DocumentEN />} />
              <Route path="/barE" element={<Bar />} />
              <Route path="/lineE" element={<Line />} />
            </Routes>
          </main>
        </div>
     </MyProSidebarProviderE>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default AppdashU;