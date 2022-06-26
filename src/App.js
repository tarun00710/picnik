import { Box} from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Route , Routes} from 'react-router-dom';
import Home from'./Components/Home';
function App() {
  let userLoggedIn = true
  return (
    <>
      <Navbar/>
      <Box>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          </Routes>
      </Box> 
    </>
  );
}

export default App;
