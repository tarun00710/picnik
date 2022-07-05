import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";
import homeLayout from "../Assets/explore.png";
import { Send } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Homepage = () => {
  const StyledHomeImage = styled("div")({
    backgroundImage: `url(${homeLayout})`,
    backgroundSize:"100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center center",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  //  backgroundAttachment:"fixed"
  });
  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      {/* <StyledHomeImage src={homeLayout}/> */}
      <StyledHomeImage>
        <Link style={{ textDecoration: "none", color: "#fff" }} to={"/Home"}>
          <Button variant="contained" endIcon={<Send />}>
            Explore
          </Button>
        </Link>
      </StyledHomeImage>
    </Box>
  );
};

export default Homepage;
