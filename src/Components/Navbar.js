import styled from "@emotion/styled";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import {
  CameraRounded,
  AccountCircleRounded,
  Logout,
} from "@mui/icons-material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Slices/UserSlice";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Link style={{ textDecoration: "none", color: "#fff" }} to={"/"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CameraRounded />
            <Typography variant="h6">PicNick</Typography>
          </Box>
        </Link>

        {!userInfo.userLoggedIn ? (
          <Box sx={{ display: "flex" }}>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={"/Signup"}
            >
              <Typography sx={{ mr: "10px" }}>Signup</Typography>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={"/Login"}
            >
              <Typography sx={{ mr: "10px" }}>Login</Typography>
            </Link>
            <AccountCircleRounded />
          </Box>
        ) : (
          <Box
            onClick={() => {
              dispatch(userActions.logoutUser());
              navigate("/Home");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover": { cursor: "pointer", color: "#000000" },
            }}
          >
            <Typography
              sx={{
                mr: "10px",
              }}
            >
              Logout
            </Typography>
            <Avatar src={userInfo.user.avatar} alt/>
            <Logout></Logout>
          </Box>
        )}
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
