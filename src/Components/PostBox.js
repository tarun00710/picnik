import { Avatar, Button, Grid, IconButton, TextField } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';
import {InsertPhotoOutlined,GifBoxOutlined,SentimentSatisfiedAlt} from '@mui/icons-material'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction, PostSlice } from "../Slices/PostSlice";
import axios from "axios";

const PostBox = () => {

  // const post = useSelector((state) => state.post);
  // const [file, setFile] = useState();
  // const dispatch = useDispatch();
  // const [createPost, setCreatePost] = useState({
  //   postContent: "",
  //   postImage: ""
  // });

  // const inputHandler = (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "postContent") {
  //     setCreatePost({ ...createPost, postContent: value });
  //   } else {
  //     setFile(files[0]);
  //     previewImage(files[0]);
  //   }
  // };

  // const previewImage = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setCreatePost({ ...createPost, postImage: reader.result });
  //   };
  // };

  // const onClickHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(createPost.postContent);
  //     const form = new FormData();
  //     form.append("postText", createPost.postContent);
  //     form.append("photo", file);
  //     const response = await axios({
  //       method: "post",
  //       url:
  //         "http://localhost:5000/userActions/6299e0651738587f1e1c4939/upload",
  //       data: form,
  //       headers: {
  //         "Content-Type": `multipart/form-data`
  //       }
  //     });
  //     console.log(response.data);
  //     if (response) {
  //       dispatch(postAction.addPost(response.data.savedPost));
  //       setCreatePost({ postContent: "", postImage: "" });
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };




  return (
      <Box>
      <Box position="sticky">
        <Grid  container alignItems={"center"} 
         margin="1.5rem 0">
             <Grid item container alignItems={"center"}direction="row">
            <Grid item xs={1}>
                <Avatar></Avatar>
            </Grid>
            <Grid item xs={11}>
            <TextField id="standard-basic" label="What's happening" variant="standard" sx={{padding:"0.5rem"}} fullWidth/>
            </Grid>
            </Grid>
            <Grid item xs={10}>
            <IconButton><InsertPhotoOutlined/></IconButton>
            <IconButton><GifBoxOutlined/></IconButton>
            <IconButton><SentimentSatisfiedAlt/></IconButton>  
            </Grid>
            <Grid item xs={1}><Button variant="contained">Post</Button></Grid>
        </Grid>
        </Box>
        </Box>
  )
}

export default PostBox