import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import homeLayout from "../Assets/vibes.png";
import { Send } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Homepage = () => {
  const StyledHomeImage = styled("div")({
    backgroundImage: `url(${homeLayout})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  return (
    <>
      {/* <StyledHomeImage src={homeLayout}/> */}
      <StyledHomeImage>
        <Link style={{ textDecoration: "none", color: "#fff" }} to={"/Home"}>
          <Button variant="contained" endIcon={<Send />}>
            Explore
          </Button>
        </Link>
      </StyledHomeImage>
    </>
  );
};

export default Homepage;
