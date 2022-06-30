import React from "react";
import { ListItem, ListItemButton, ListItemText, Switch , Box } from "@mui/material";
// import styled from "@emotion/styled";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Person,Home, SupervisedUserCircle,CameraEnhance, ModeNight,PersonAddAlt1 } from "@mui/icons-material"
import { Link } from "react-router-dom";


// const StyleSidebar = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   position:"fixed"
// });

const Sidebar = () => {
  return (
    <>
    <Box>
    <Box position="fixed">
      <ListItem>
        <ListItemButton>
        <Link style={{ textDecoration: "none", color: "#fff" }} to={"/Home"}>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>
            <Home
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
            <ListItemText  color="#E0417E" primary="Home"
            />
          </ListItemIcon>
          </Link>
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <Link style={{ textDecoration: "none", color: "#fff" }} to={"/posts"}>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CameraEnhance
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
            <ListItemText  color="#E0417E" primary="Posts"
            />
          </ListItemIcon>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Person
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
        <Link style={{ textDecoration: "none", color: "#fff" }} to={"/followers"}>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <SupervisedUserCircle
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
             <ListItemText  color="#E0417E" primary="Followers"
            />
          </ListItemIcon>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
      <Link style={{ textDecoration: "none", color: "#fff" }} to={"/followings"}>
        <ListItemButton>
          <ListItemIcon sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <PersonAddAlt1
              color="secondary"
              sx={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
             <ListItemText  color="#E0417E" primary="Followings"
            />
          </ListItemIcon>
        </ListItemButton>
        </Link>
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
    </>
      
  );
};

export default Sidebar;
