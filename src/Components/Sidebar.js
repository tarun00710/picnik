import React from "react";
import { ListItem, ListItemButton, ListItemText, Switch , Box } from "@mui/material";
import styled from "@emotion/styled";
import ListItemIcon from "@mui/material/ListItemIcon";
import { PersonOutline,Home, SupervisedUserCircle,CameraEnhance, ModeNight } from "@mui/icons-material"


const StyleSidebar = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   position:"fixed"
});

const Sidebar = () => {
  return (
      <Box sx={{display:{xs:"none",sm:"block"}}}>
    <Box position="fixed">
      <ListItem>
        <ListItemButton>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>
            <Home
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
            <ListItemText  color="#E0417E" primary="Home"
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CameraEnhance
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
            <ListItemText  color="#E0417E" primary="Posts"
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <PersonOutline
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
             <ListItemText  color="#E0417E" primary="Profile"
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <SupervisedUserCircle
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
             <ListItemText  color="#E0417E" primary="Followers"
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <ModeNight/>
           <Switch  defaultChecked />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Box>
    </Box>
  );
};

export default Sidebar;
