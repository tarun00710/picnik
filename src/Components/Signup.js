import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {StyledDiv,StyleBox} from './Login'



const Signup = () => {
  return (
    <form>
    <StyledDiv>
     <StyleBox>
       <Typography variant="h4" color="#E0417E"> Signup </Typography>
     </StyleBox>
     <StyleBox>
       <TextField
         sx={{width:"300px"}}
         id=""
         label="Username" variant="filled"  
       />
     </StyleBox>
     <StyleBox>
       <TextField
         sx={{width:"300px"}}
         id=""
         label="Email" variant="filled"  
       />
     </StyleBox>
     <StyleBox>
       <TextField
       sx={{width:"300px"}}
       id=""
       label="Password" variant="filled"
       /> 
     </StyleBox>
     <StyleBox>
       <TextField
       sx={{width:"300px"}}
       id=""
       label="Confirm Password" variant="filled"
       /> 
     </StyleBox>
     <Button variant="contained" sx={{width:"300px"}}>submit</Button>
     <Typography color="#E0417E"> Already an user ? <Link to="/login" style={{textDecoration : "none", }}> Login </Link> </Typography>
   </StyledDiv>
  </form>   
  )
}

export default Signup