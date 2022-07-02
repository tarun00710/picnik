import {
  Box,
  Grid,
  IconButton,
  Typography,
  CardContent,
  Card,
  Avatar,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Slices/UserSlice";
import Sidebar from "./Sidebar";
import { SentimentSatisfied } from "@mui/icons-material";

const Followers = () => {
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
          userActions.getUserFollowing(response.data.getDetail.followers)
        );
        // }
      } catch (error) {
        console.log(error.message);
      }
    };
    getFollowingDetail();
  }, []);


  const unFollowHandler = async(userId,unfollowId) => {
    try {
      const response = await axios.post(`http://localhost:5000/useraction/${userId}/removefollower/${unfollowId}`)
      console.log(response.data)
      if(response){
        console.log("hello")
        dispatch(userActions.getUserFollowing(response.data.getUpdatedUser.followings))
      }
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={8} md={9} pr={4}>
        {user?.followers.length === 0 ? (
          <Box mt={4} sx={{ display: "flex", justifyContent: "center" ,alignItems:"center"}}>
            <Typography color="secondary" variant="h6">
              Oops...You have no followers
            </Typography>
            <SentimentSatisfied color="secondary" />
          </Box>
        ) : (
          user?.followers.map((eachUser) => (
            <Card sx={{ display: "flex", mt: "1.5rem" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography color="primary" component="div" variant="h6">
                      {eachUser.name}
                    </Typography>
                    <Avatar src={eachUser.avatar} alt={eachUser.name} />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {eachUser.bio}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="span"
                    >
                      Followers :{" "}
                      <Typography
                        color="secondary"
                        component="span"
                        variant="subtitle1"
                      >
                        {eachUser.followers.length}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Followings :{" "}
                      <Typography
                        color="secondary"
                        component="span"
                        variant="subtitle1"
                      >
                        {eachUser.followings.length}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Posts :{" "}
                      <Typography
                        color="secondary"
                        component="span"
                        variant="subtitle1"
                      >
                        {eachUser.posts.length}
                      </Typography>
                    </Typography>
                  </Box>
                  <Button onClick={() => unFollowHandler(user._id,eachUser._id)} variant="outlined">Unfollow</Button>
                </CardContent>
              </Box>
            </Card>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default Followers;
