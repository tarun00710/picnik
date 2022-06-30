import {
  Box,
  Grid,
  IconButton,
  Typography,
  CardContent,
  Card,
  Avatar,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Slices/UserSlice";
import Sidebar from "./Sidebar";

const Following = () => {
  const userInfo = useSelector((state) => state.user);
  const { user } = userInfo;
  const dispatch = useDispatch();
  useEffect(() => {
    const getFollowingDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${user._id}`
        );
        console.log(response.data);
        // if(response){
        console.log(response.data.getDetail.followings);
        dispatch(
          userActions.getUserFollowing(response.data.getDetail.followings)
        );
        // }
      } catch (error) {
        console.log(error.message);
      }
    };
    getFollowingDetail();
  }, []);
  console.log(user);
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={8} md={9} pr={4}>
        {user?.followings.map((eachUser) => (
          <Card sx={{mt:"1.5rem"}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography color="primary" component="div" variant="h6">
                  {eachUser.name}
                </Typography>
                <Avatar sx={{width:56,height:56}} src={eachUser.avatar} alt={eachUser.name}/>
                </Box>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {eachUser.bio}
                </Typography>
                {/* </Box> */}
              {/* </CardContent> */}
              {/* <CardContent sx={{display:"flex"}}> */}
              <Box sx={{display:"flex",flexWrap:"wrap"}}> 
              <Typography
              pr={2}
                  variant="subtitle1"
                  color="text.secondary"
                  component="span"
                >
                  Followers : <Typography color="secondary" component="span" variant="subtitle1">{eachUser?.followers?.length}</Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  pr={2}
                >
                  Followings : <Typography color="secondary" component="span" variant="subtitle1">{eachUser.followings.length}</Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Posts : <Typography color="secondary" component="span" variant="subtitle1">{eachUser.posts.length}</Typography>
                </Typography>
              </Box>
              
              </CardContent>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            
          </IconButton>
          <IconButton aria-label="play/pause">
            
          </IconButton>
          <IconButton aria-label="next">
            hek
          </IconButton>
        </Box> */}
            </Box>
            {/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      /> */}
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default Following;
