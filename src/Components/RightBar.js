import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

const RightBar = () => {
  
  const [searchData,setSearchData] = useState([])
  const getData = async(e) => {
    try {
      const response = await axios.get(`http://localhost:5001/useraction/${e.target.value}`)
      setSearchData(response.data.response)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  function debounce(func,d){
    let timer;
    return function(...args){
      if(timer) clearTimeout(timer);
      timer = setTimeout(()=>
        {
          func.apply(this,args)
        },d)
    }
  }
  const betterfunc = debounce(getData,1000)

  console.log(searchData)
  return (
    <Box mt={3} mr={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <TextField
        id="outlined-basic"
        label="Search people"
        variant="outlined"
        onKeyUp={betterfunc}
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
      {searchData?.map((ele,i) => <Suggestions name={ele.name} username={ele.username} avatar={ele.avatar} userId={ele._id} bio={ele.bio}/>)}
    </Box>
  );
};

export default RightBar;
