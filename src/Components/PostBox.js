import {
  Avatar,
  Button,
  Grid,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import {
  InsertPhotoOutlined,
  GifBoxOutlined,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction, PostSlice } from "../Slices/PostSlice";
import axios from "axios";

const PostBox = () => {
  // const post = useSelector((state) => state.post);
  const userInfo = useSelector((state) => state.user);
  const { user } = userInfo;
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const [createPost, setCreatePost] = useState({
    postContent: "",
    postImage: "",
  });

  const inputHandler = (e) => {
    const { name, value, files } = e.target;
    if (name === "postContent") {
      setCreatePost({ ...createPost, postContent: value });
    } else {
      setFile(files[0]);
      previewImage(files[0]);
    }
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCreatePost({ ...createPost, postImage: reader.result });
    };
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("postText", createPost.postContent);
      form.append("photo", file);
      const response = await axios({
        method: "post",
        url: `http://localhost:5000/userAction/${user._id}/upload`,
        data: form,
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
  
      if (response) {
        dispatch(postAction.addPost(response.data.savedPost));
        setCreatePost({ postContent: "", postImage: "" });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form>
      <Box position="sticky">
        <Grid container alignItems={"center"} margin="1.5rem 0" direction="column">
          <Grid item container alignItems={"center"} direction="row" xs>
            <Grid item xs={2}>
              <Avatar
                sx={{ width: 65, height: 65 }}
                src={createPost.postImage}
              />
              {/* preview image here only */}
            </Grid>
            <Grid item xs>
              <TextField
                onChange={(e) => inputHandler(e)}
                name="postContent"
                value={createPost.postContent}
                id="standard-basic"
                label="What's happening"
                variant="standard"
                // sx={{ padding: "0.5rem" }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item container alignItems={"center"} direction="row" xs>
          <Grid item xs>
            <IconButton component="label">
              <InsertPhotoOutlined />
              <input
                name="file"
                onChange={(e) => inputHandler(e)}
                type="file"
                hidden
              />
            </IconButton>
            <IconButton>
              <GifBoxOutlined />
            </IconButton>
            <IconButton>
              <SentimentSatisfiedAlt />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={(e) => onClickHandler(e)} variant="contained">
              Post
            </Button>
          </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default PostBox;
