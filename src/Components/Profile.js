import { AddAPhoto,ArrowBack } from "@mui/icons-material";
import {
  Card,
  Box,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardContent,
  Avatar,
  AvatarGroup,
  Modal,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { StyleBox } from "./Login";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { post } = useSelector((state) => state.post);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    boxShadow: "1px 1px 10px 0.2px #e94c89",
    p: 3,
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "55px 10px 55px 10px",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState();
  const navigate =  useNavigate()


  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFile(reader.result);
    };
  };
  const inputHandler = (e) => {
    previewImage(e.target.files[0])
  }
  

  console.log(user);
  console.log(post);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Card
        sx={{
          width: "70%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Avatar
          src={user.avatar}
          variant="rounded"
          sx={{ width: 250, height: 150, alignSelf: "center" }}
        />
        <CardContent>
          <Typography p={1} gutterBottom variant="h5" component="div">
            Name: {user.name}
          </Typography>
          <Typography p={1} variant="body2" color="text.secondary">
            Username: {user.username}
          </Typography>
          <Typography p={1} variant="body2" color="text.secondary">
            Bio: {user.bio}
          </Typography>
          <Typography p={1} variant="body2" color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography p={1} variant="body2" color="text.secondary">
            Followers: {user.followers.length}
          </Typography>
          <Typography p={1} variant="body2" color="text.secondary">
            Followings: {user.followings.length}
          </Typography>
          <Typography pt={1} pl={1} variant="body2" color="text.secondary">
            Posts: {post.length}
          </Typography>
          <AvatarGroup max={5}>
            {post.map((post) => (
              <Avatar alt={post.postText} src={post.postImage} />
            ))}
          </AvatarGroup>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleOpen()} size="small">
            Edit
          </Button>
          <Button onClick={() => navigate("/home")} size="small">
            Go back <ArrowBack/>
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Avatar
            sx={{ width: "5rem", height: "5rem", borderColor: "red" }}
            src={file}
            // alt={name}
          />
          <Button
            sx={{ borderRadius: "19px" }}
            variant="contained"
            component="label"
            onClick={()=>previewImage()}
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

          <TextField
            name="name"
            sx={{ width: "100%" }}
            id=""
            label="Name"
            variant="filled"
          />

          <TextField
            name="username"
            sx={{ width: "100%" }}
            id=""
            label="Username"
            variant="filled"
          />

          <TextField
            name="Bio"
            sx={{ width: "100%" }}
            id=""
            label="Bio"
            variant="filled"
          />
          <Box>
          <Button
          variant="contained"
            sx={{ margin: "1rem 1rem 0 0" }}
            onClick={() => setOpen(false)}
          >
            Update
          </Button>
          <Button
            sx={{ margin: "1rem 1rem 0 0" }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          </Box>
         
        </Box>
      </Modal>
    </Box>
  );
};

export default Profile;
