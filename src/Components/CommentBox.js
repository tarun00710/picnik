import { Card,Box, Avatar, IconButton, CardMedia, Typography, CardActions, CardContent, CardHeader, Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import { postAction } from "../Slices/PostSlice";
import {Favorite, ModeComment, ThumbDownAlt } from "@mui/icons-material";
import Eachcomment from "./Eachcomment";
import Sidebar from "./Sidebar";

const CommentBox = () => {
    const {postId} = useParams()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.user)
    const {post} = useSelector((state) => state.post )
    useEffect(()=>{
        const getPostComments = async() => {
           const response = await axios.get(`http://localhost:5001/useraction/${postId}/comments`)
           console.log(response.data)
           if(response.data.success === true)
            dispatch(postAction.postComment(response.data.getPost))
        }
        console.log(post)
        getPostComments()
     },[])

     const clickedPost = post.filter((post) => post._id === postId)
     console.log(clickedPost[0])
  return (
    <>
    <Grid container spacing>
        <Grid item xs={4} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} md={8} pr={2}>
  <Card sx={{ maxWidth: 420, marginTop: "3rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#E0417E" }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <Delete color="secondary"  */}
            {/* // onClick={() => deletePost(clickedPost[0]._id)} */}
             {/* /> */}
          </IconButton>
        }
        title={user.username}
        subheader={clickedPost[0].timeStamp}
      />
      <CardMedia
        component="img"
        height="auto"
        sx={{ maxHeight: "300px" }}
        image={clickedPost[0].postImage} //from database
        // alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {clickedPost[0].postText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
        //   onClick={() => likeHandler(clickedPost[0]._id, user._id)}
          aria-label="add to favorites"
        >
          <Favorite />
          <Typography>{clickedPost[0].like.length}</Typography>
        </IconButton>
        {/* <Link to={"/postcomment"}> */}
          <IconButton aria-label="Comment">
            <ModeComment />
            <Typography>{clickedPost[0].comments.length}</Typography>
          </IconButton>
        {/* </Link> */}
        <IconButton
        //   onClick={() => dislikeHandler(clickedPost[0]._id, user._id)}
          aria-label="dislike"
        >
          <ThumbDownAlt />
          <Typography>{clickedPost[0].dislike.length}</Typography>
        </IconButton>
       
      </CardActions>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TextField sx={{margin:"0 0 1.5rem 1rem"}} id="standard-basic" label="Add comment" variant="standard" />
      <Button>Add</Button>
      </Box>
    </Card> 
    <Typography mt={2} variant="body2" color="text.secondary">Comments :</Typography>
    
    {clickedPost[0].comments.map((comment) => <Eachcomment comment={comment}/>)}
    </Grid>
    </Grid>
    </>
    
    
  );
};

export default CommentBox;
