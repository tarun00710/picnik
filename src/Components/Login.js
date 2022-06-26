import React from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

export const StyledDiv = styled("div")({
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  height:"400px"
})

export const StyleBox = styled("Box")({
  margin:"1rem",
})

const Login = () => {
  return (
     <form>
       <StyledDiv>
        <StyleBox>
          <Typography variant="h3" color="#E0417E"> Login </Typography>
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
        <Button variant="contained" sx={{width:"300px",margin:"1rem"}}>submit</Button>
        <Typography color="#E0417E"> Not an user ? <Link to="/signup" style={{textDecoration : "none", }}> Signup </Link> </Typography>
      </StyledDiv>
     </form>       
  )   
}

export default Login