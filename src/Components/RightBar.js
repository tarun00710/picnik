import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

const RightBar = () => {
  return (
    <Box mt={3} mr={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <TextField
        id="outlined-basic"
        label="Search people"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default RightBar;
