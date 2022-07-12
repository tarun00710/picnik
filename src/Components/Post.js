import React, { useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
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
import { Link } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const { user } = userInfo;
 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/users/${user._id}/posts`
        );
        let payloadData = response.data.getDetail.posts;
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

  //delete
  const deletePost = async (postId) => {
    try {
      
      const response = await axios.post(
        `http://localhost:5001/useraction/${user._id}/removePost/${postId}`
      );
      if (response.data.success === true){
        dispatch(postAction.deletePost(postId));

      }
    } catch (error) {
      console.log(error);
    }
  };
  //like

  const likeHandler = async (postId, userId) => {
    console.log(postId,userId)
    const response = await axios.post(
      `http://localhost:5001/useraction/${userId}/likePost/${postId}`
    );
    console.log(response.data);
    if (response.data.success === true)
      dispatch(postAction.likePost({ postId, userId }));
  };

  //dislike
  const dislikeHandler = async (postId, userId) => {
    console.log(postId);
    const response = await axios.post(
      `http://localhost:5001/useraction/${userId}/dislikePost/${postId}`
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
          {post?.post?.map((Post, i) => {
            return (
                
              <Card key={uuidv4()}  sx={{ maxWidth: 420, marginTop: "2rem" }}>
                <CardHeader
                  avatar={
                    <Avatar
                    src={user.avatar}
                      sx={{ bgcolor: "#E0417E" }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <Delete color="secondary" onClick={() => deletePost(Post._id)} />
                    </IconButton>
                  }
                  title={user.username}
                  subheader={Post.timeStamp}
                />

                <CardMedia
                  component="img"
                  height="auto"
                  sx={{ maxHeight: "300px" }}
                  image={Post.postImage} //from database
                  // alt="Post image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {Post.postText}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={() => likeHandler(Post._id, user._id)}
                    aria-label="add to favorites"
                  >
                    <Favorite />
                    <Typography>{Post.like.length}</Typography>
                  </IconButton>
                  <Link to={`${Post._id}/postcomment`}>
                  <IconButton aria-label="Comment">
                    <ModeComment />
                    <Typography>{Post.comments.length}</Typography>
                  </IconButton>
                  </Link>
                  <IconButton
                    onClick={() => dislikeHandler(Post._id, user._id)}
                    aria-label="dislike"
                  >
                    <ThumbDownAlt />
                    <Typography>{Post.dislike.length}</Typography>
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
