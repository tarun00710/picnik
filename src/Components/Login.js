import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {userActions} from '../Slices/UserSlice'

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
  const dispatch = useDispatch()
  const [user,setUser] = useState({
    email:"",
    password:""
  })
const userInfo = useSelector((state) => state.user)
const navigate =  useNavigate()
const location = useLocation()
  const logInHandler = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5001/users/login",{email:user.email,password:user.password})
      console.log(response.data)
      if(response.data.success === true){
      await dispatch(userActions.loginUser(response.data.checkUser))
      if(location?.state?.from)
      navigate(location.state.from)
      else
      navigate('/Home')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(userInfo?.user)

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
            onChange={(e)=>setUser({...user,email:e.target.value})}
            value={user.email}  
          />
        </StyleBox>
        <StyleBox>
          <TextField
          onChange={(e)=>setUser({...user,password:e.target.value})}
          sx={{width:"300px"}}
          id=""
          label="Password" variant="filled"
          value={user.password}
          /> 
        </StyleBox>
        <Button type='submit' onClick={(e)=>logInHandler(e)} variant="contained" sx={{width:"300px",margin:"1rem"}}>submit</Button>
        <Typography color="#E0417E"> Not an user ? <Link to="/signup" style={{textDecoration : "none", }}> Signup </Link> </Typography>
      </StyledDiv>
     </form>       
  )   
}

export default Login