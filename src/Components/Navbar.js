import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import CameraRoundedIcon from "@mui/icons-material/CameraRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React from "react";
import { Link } from "react-router-dom";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {

  let userLoggedIn = true
  return (
      <AppBar position="sticky" sx={{mb:5}}>
        <StyledToolBar>
          <Link style={{textDecoration:"none",color:"#fff"}} to={"/"}><Box sx={{ display: "flex", alignItems: "center" }}>
            <CameraRoundedIcon />
            <Typography variant="h6">PicNick</Typography>
          </Box></Link>
          
          { !userLoggedIn ? <Box sx={{ display: "flex" }}>
            <Link style={{textDecoration:"none",color:"#fff"}} to={"/Signup"}>
              <Typography sx={{ mr: "10px" }}>Signup</Typography>
            </Link>

            <Link style={{textDecoration:"none",color:"#fff"}} to={"/Login"}>
              {" "}
              <Typography sx={{ mr: "10px" }}>Login</Typography>
            </Link>
            <AccountCircleRoundedIcon />
          </Box> : <Typography sx={{ mr: "10px" , ":hover":{cursor:"pointer",color:"#000000"}}}>Logout</Typography>}
        </StyledToolBar>
      </AppBar>
  );
};

export default Navbar;
