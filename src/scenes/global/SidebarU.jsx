import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { useSidebarContext } from "./SidebarContextU";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme, Box, Typography} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
//import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
//import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
//import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


//import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
//import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("DashboardU");
  const { sidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <Box
      sx={{
        position: "static",
        display: "flex",
        height: "105vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
             
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography  color={colors.grey[100]}>
              <h3>ETU</h3>  
                </Typography>
             
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px">
            
              <Box textAlign="center">
                <Typography
                  
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                <h2>Nom etu</h2>  
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "1%"}>
          <Item
              title="Dashboard"
              to="/AppdashU"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Gérer le goupe"
              to="/AppdashU/TeamU"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Créer un Groupe "
              to="/AppdashU/creeGoupe"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Projet Choisis"
              to="/AppdashU/projetCH"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
              <Item
              title="Calendrier"
              to="/AppdashU/CalendarU"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            
            <Item
              title="Ajouter une Tache"
              to="/AppdashU/ajoutT"
              icon={< AddBoxIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
         
            <Item
              title="Partager progrès"
              to="/AppdashU/progres"
              icon={<IosShareIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           <Item
              title="Prenez rendez-vous"
              to="/AppdashU/RendezvousU"
              icon={<AddIcCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Ajouter document"
              to="/AppdashU/documentE"
              icon={<DocumentScannerIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
             Graphiques
            </Typography>
            <Item
              title="Bar Chart"
              to="/AppdashU/barU"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            Autre
            </Typography>
            <Item
              title="Profile"
              to="/AppdashU/"
              icon={< AccountCircleIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Log-out"
              to="/"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
