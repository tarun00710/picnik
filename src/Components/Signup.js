import { Avatar, Button, TextField, Typography,Box } from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { StyledDiv, StyleBox } from "./Login";
import axios from "axios";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [addUser, setAddUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    previewimage: "",
    uploadimage: "",
  });
  const [file,setFile] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputHandler = (e) => {
   
    const { name, value, files } = e.target;
    if (name === "name") {
      setAddUser({ ...addUser, name: value });
    }
    if (name === "username") {
      setAddUser({ ...addUser, username: value });
    }
    if (name === "email") {
      setAddUser({ ...addUser, email: value });
    }
    if (name === "password") {
      setAddUser({ ...addUser, password: value });
    }
    if (name === "confirmpassword") {
      setAddUser({ ...addUser, confirmpassword: value });
    } else {
      console.log("file", files[0]);
      // setAddUser({ ...addUser, uploadimage: files[0] });
      setFile(files[0])
      previewImage(files[0]);
    }
  };

 const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      setAddUser({ ...addUser, previewimage: reader.result });
    };
  };
  console.log(addUser,file);

  const {
    name,
    username,
    email,
    password,
    confirmpassword,
    previewimage,
    bio,
  } = addUser;

  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("name", name);
      form.append("username", username);
      form.append("password", password);
      form.append("email", email);
      form.append("photo", file);
      form.append("bio",bio)
      const response = await axios({
        method: "post",
        url:
          `http://localhost:5000/users/signup`,
        data: form,
        headers: {
          "Content-Type": `multipart/form-data`
        }
      });
      console.log(response.data);
      if (response.data.success === true) {
        // dispatch(postAction.addPost(response.data.savedPost));
        setAddUser({ name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        previewimage: "",
        uploadimage: ""});
        navigate('/login')
      }
    } catch (error) {
      console.log(error.message);
    }
  };







  return (
    <>
      <form style={{ marginTop: "8rem" }}>
        <StyledDiv>
          <StyleBox>
            <Typography variant="h4" color="#E0417E">
              {" "}
              Signup{" "}
            </Typography>
          </StyleBox>
          <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Button
            sx={{ borderRadius: "19px" }}
            variant="contained"
            component="label"
          >
            Add
            <input
              name="file"
              onChange={(e) => inputHandler(e)}
              type="file"
              hidden
            />
            <AddAPhoto />
          </Button>
          <Avatar
          sx={{ width: "5rem", height: "5rem", borderColor: "red" }}
          src={previewimage}
          alt={name}
        />
        </Box>
          <StyleBox>
            <TextField
              name="name"
              value={name}
              onChange={(e) => inputHandler(e)}
              sx={{ width: "300px" }}
              id=""
              label="Name"
              variant="filled"
            />
          </StyleBox>
          <StyleBox>
            <TextField
              value={username}
              name="username"
              onChange={(e) => inputHandler(e)}
              sx={{ width: "300px" }}
              id=""
              label="Username"
              variant="filled"
            />
          </StyleBox>
          <StyleBox>
            <TextField
              value={email}
              name="email"
              onChange={(e) => inputHandler(e)}
              sx={{ width: "300px" }}
              id=""
              label="Email"
              variant="filled"
            />
          </StyleBox>
          <StyleBox>
            <TextField
              value={password}
              name="password"
              onChange={(e) => inputHandler(e)}
              sx={{ width: "300px" }}
              id=""
              label="Password"
              variant="filled"
            />
          </StyleBox>
          <StyleBox>
            <TextField
              value={confirmpassword}
              name="confirmpassword"
              onChange={(e) => inputHandler(e)}
              sx={{ width: "300px" }}
              id=""
              label="Confirm Password"
              variant="filled"
            />
          </StyleBox>
          <Button onClick={(e)=>onClickHandler(e)} variant="contained" sx={{ width: "300px" }}>
            submit
          </Button>
          <Typography color="#E0417E">
            {" "}
            Already an user ?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              Login{" "}
            </Link>{" "}
          </Typography>
        </StyledDiv>
      </form>
      
    </>
  );
};

export default Signup;
