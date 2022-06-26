import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction, PostSlice } from "../Slices/PostSlice";
import axios from "axios";

const Post = () => {

  // const dispatch = useDispatch();
  // const post = useSelector((state) => state.post);


  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/user/6299e0651738587f1e1c4939"
  //       );
  //       if (response) {
  //         await dispatch(postAction.getPost(response.data.getDetails.posts));
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getData();
  // }, [dispatch]);


  
  // const likeHandler = (postId, authorId) => {
  //   dispatch(postAction.likePost({ postId, authorId }));
  // };
  // const dislikeHandler = (postId, authorId) => {
  //   dispatch(postAction.dislikePost({ postId, authorId }));
  // };

  return (
    <>
    <Card>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           <MoreVertIcon/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016" 
      />
      <CardMedia
        component="img"
        height="200"
        image="https://wallpapertag.com/wallpaper/full/2/f/e/519365-large-japanese-scenery-wallpaper-2048x1401.jpg" //from database
        alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment">
        <ModeCommentIcon/>
        </IconButton>
        <IconButton aria-label="like">
          <ShareIcon />
        </IconButton>
      
        
      </CardActions>
    </Card>
    <Card>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           <MoreVertIcon/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016" 
      />
      <CardMedia
        component="img"
        height="200"
        image="https://wallpapertag.com/wallpaper/full/2/f/e/519365-large-japanese-scenery-wallpaper-2048x1401.jpg" //from database
        alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment">
        <ModeCommentIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
        
      </CardActions>
    </Card>
    <Card>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           <MoreVertIcon/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016" 
      />
      <CardMedia
        component="img"
        height="200"
        image="https://wallpapertag.com/wallpaper/full/2/f/e/519365-large-japanese-scenery-wallpaper-2048x1401.jpg" //from database
        alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment">
        <ModeCommentIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
        
      </CardActions>
    </Card>
    <Card>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           <MoreVertIcon/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016" 
      />
      <CardMedia
        component="img"
        height="200"
        image="https://wallpapertag.com/wallpaper/full/2/f/e/519365-large-japanese-scenery-wallpaper-2048x1401.jpg" //from database
        alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment">
        <ModeCommentIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
        
      </CardActions>
    </Card>
    </>
  )
}

export default Post