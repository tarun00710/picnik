import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Post from "./Components/Post";
import PrivateRoute from "./Components/PrivateRoute";
import Homepage from "./Components/Homepage";
import Followers from "./Components/Followers";
import Following from "./Components/Following";
import Profile from "./Components/Profile"
function App() {
  return (
    <>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/followings" element={<Following />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
