import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import DashboardE from "./scenes/dashboard/DashboardE"
import { Box } from "@mui/system";
/*import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/calendar";*/


function Appdash() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      
        <div className="app"> 
        <main className="content">  
        
        <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 1,
    gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header header header"
  " main main  . sidebar "
  
  "footer footer footer footer"`,
  }}
>
        <Box sx={{ gridArea: 'sidebar'}}><Sidebar isSidebar={isSidebar} /> </Box>
        
         
          <Box sx={{ gridArea: 'header' }}><Topbar setIsSidebar={setIsSidebar}/>   </Box>
              
              <Box sx={{width:"305%" }}>
            <Routes>
              <Route path="/" element={<DashboardE/>} />
           {/**    <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />*/}
              
            </Routes>
            </Box>
            </Box>
          </main>
        </div>
        
     </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Appdash;