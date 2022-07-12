import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Avatar, IconButton, CardMedia, Typography, CardActions, CardContent, CardHeader, Box} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { Favorite, ModeComment, ThumbDownAlt } from '@mui/icons-material';
const Feed = () => {
    const {user} = useSelector((state) => state.user)
    console.log(user)
    const [res,setRes] = useState([])
    useEffect(()=>{
        const getfeeds = async() => {
            const response =  await axios.get(`http://localhost:5001/useraction/${user._id}/feedposts`)
            if(response.data)
            await setRes(response.data.allpost)
        }
        getfeeds()
    },[])
    console.log(res)
  return (
    <>{(res?.length>0) ? <Box>{res?.map((Post) => 
        <Card key={uuidv4()}  sx={{ maxWidth: 420, marginTop: "2rem" }}>
                <CardHeader
                  avatar={
                    <Avatar
                    src={Post.author.avatar}
                      sx={{ bgcolor: "#E0417E" }}
                      aria-label="recipe"
                    ></Avatar>
                  }
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
                    // onClick={() => likeHandler(Post._id, user._id)}
                    aria-label="add to favorites"
                  >
                    <Favorite />
                    <Typography></Typography>
                  </IconButton>
                  {/* <Link to={`${Post._id}/postcomment`}> */}
                  <IconButton aria-label="Comment">
                    <ModeComment />
                    <Typography></Typography>
                  </IconButton>
                  {/* </Link> */}
                  <IconButton
                    // onClick={() => dislikeHandler(Post._id, user._id)}
                    aria-label="dislike"
                  >
                    <ThumbDownAlt />
                    <Typography>
                        {Post.dislike.length}
                        </Typography>
                  </IconButton>
                </CardActions>
              </Card>
              )}</Box> : <Box>Loading...</Box>}
    
              </>
  )
}

export default Feed