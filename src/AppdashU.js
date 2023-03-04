import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import SidebarU from "./scenes/global/SidebarU";
//import { Box } from "@mui/system";
import DashboardU from "./scenes/dashboard/DashboardU"
import { Grid } from '@mui/material';

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
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      
        <Grid container spacing={2}>
 
  

        <Grid item  xs={12}>
    
        
         
         <Topbar setIsSidebar={setIsSidebar}/>   
              
  </Grid>


      
       
        <Grid item xs={2}>
      <SidebarU isSidebar={isSidebar} />
  </Grid> 
       

             
  <Grid item  xs={10}>
    
      
                
            <Routes>
              <Route path="/" element={<DashboardU/>} /> 
              
           {/**   <Route path="/TeamE" element={<TeamE/>} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />*/}
              
           </Routes> </Grid>  
       
        </Grid>
     </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppdashU;