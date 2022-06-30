import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Modal,
  Button,
  Box,
} from "@mui/material";
import {
  Favorite,
  ModeComment,
  MoreVert,
  ThumbDownAlt,
  Delete,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import axios from "axios";
import { postAction } from "../Slices/PostSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #E0417E",
  boxShadow: 24,
  p: 3,
};

const Post = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const { user } = userInfo;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${user._id}/posts`
        );
        console.log(response.data);
        let payloadData = response.data.getDetail.posts;
        console.log(payloadData, "line23");
        if (response) {
          await dispatch(postAction.getPost(payloadData));
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [dispatch]);

  const post = useSelector((state) => state.post);

  const deletePostHandler = async (postId) => {
    try {
      console.log("i was clicked");
      const response = await axios.post(
        `http://localhost:5000/useraction/${user._id}/removePost/${postId}`
      );
      console.log(response.data);
      if (response.data.success === true){
        dispatch(postAction.deletePost(postId));
       setOpen(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likeHandler = async (postId, userId) => {
    const response = await axios.post(
      `http://localhost:5000/useraction/${userId}/likePost/${postId}`
    );
    console.log(response.data);
    if (response.data.success === true)
      dispatch(postAction.likePost({ postId, userId }));
  };
  const dislikeHandler = async (postId, userId) => {
    const response = await axios.post(
      `http://localhost:5000/useraction/${userId}/likePost/${postId}`
    );

    if (response.data.success === true)
      dispatch(postAction.dislikePost({ postId, userId }));
  };

  return (
    <>
      <Grid container spacing>
        <Grid item xs={4} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} md={8} pr={2}>
          {post?.post?.map((eachPost) => {
            return (
              <Card sx={{ maxWidth: 420, marginTop: "2rem" }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: "#E0417E" }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVert onClick={handleOpen} />

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title">
                            Remove this post ?
                          </Typography>
                          <Button
                            onClick={() => deletePostHandler(eachPost._id)}
                            sx={{ margin: "1rem 1rem 0 0" }}
                            variant="outlined"
                            endIcon={<Delete />}
                          >
                            Remove
                          </Button>
                          <Button
                            sx={{ margin: "1rem 1rem 0 0" }}
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </Button>
                        </Box>
                      </Modal>
                    </IconButton>
                  }
                  title={user.username}
                  subheader={eachPost.timeStamp}
                />
                <CardMedia
                  component="img"
                  height="auto"
                  sx={{ maxHeight: "300px" }}
                  image={eachPost.postImage} //from database
                  alt="Post image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {eachPost.postText}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={() => likeHandler(eachPost._id, user._id)}
                    aria-label="add to favorites"
                  >
                    <Favorite />
                    <Typography>{eachPost.like.length}</Typography>
                  </IconButton>
                  <IconButton aria-label="Comment">
                    <ModeComment />
                    <Typography>{eachPost.comments.length}</Typography>
                  </IconButton>
                  <IconButton
                    onClick={() => dislikeHandler(eachPost._id, user._id)}
                    aria-label="dislike"
                  >
                    <ThumbDownAlt />
                    <Typography>{eachPost.dislike.length}</Typography>
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Post;
