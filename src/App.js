import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "./Slices/PostSlice";
import Post from "./Components/Post";
import PrivateRoute from "./Components/PrivateRoute";
import Homepage from "./Components/Homepage";
import Followers from "./Components/Followers";
import Following from "./Components/Following";
function App() {
  // let userLoggedIn = false;

  // const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.user);
  // console.log(userInfo, "line21");
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/users/6299e0651738587f1e1c4939"
  //       );
  //       console.log(response.data);
  //       let payloadData = response.data.getDetail.posts;
  //       console.log(payloadData, "line23");
  //       if (response) {
  //         await dispatch(postAction.getPost(payloadData));
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getData();
  // }, [dispatch]);
  return (
    <>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route  path="/Home" element={<PrivateRoute>
            <Home/>
          </PrivateRoute>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/followings" element={<Following />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
