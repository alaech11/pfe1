
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import { MyProSidebarProviderU } from "./scenes/global/SidebarContextU";


import DashboardU from "./scenes/dashboard/DashboardU"
import TeamU from "./scenes/team/TeamU";

import CreeGoupe from "./scenes/creegroupe/CreeGroupe";
import ProjetCH from "./scenes/projet/ProjetCH";
import AjoutT from "./scenes/form/AjoutT";
import CalendarU from "./scenes/calendar/indexU";
import RendezvousU from './scenes/request/RendezvousU';
import DocumentE from './scenes/document/DocumentE';
import BarU from "./scenes/bar/BarU";
import LineU from "./scenes/line/LineU";
import Progres from './scenes/publier/Progres';



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
              <Route path="/teamU" element={<TeamU/>} />
              <Route path="/creeGoupe" element={<CreeGoupe />} />
           <Route path="/projetCH" element={<ProjetCH />} />
            <Route path="/ajoutT" element={<AjoutT />} />
             <Route path="/calendarU" element={<CalendarU />} />
             <Route path="/progres" element={<Progres/>}/>
             <Route path="/RendezvousU" element={<RendezvousU/>}/>
             <Route path="/documentE" element={<DocumentE />} />
              <Route path="/barU" element={<BarU />} />
              <Route path="/lineU" element={<LineU />} />


              
            </Routes>
          </main>
        </div>
      </MyProSidebarProviderU>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default AppdashU;