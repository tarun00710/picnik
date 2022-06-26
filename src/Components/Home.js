
import { Grid } from '@mui/material'
import React from 'react'
import Post from './Post'
import RightBar from './RightBar'
import Sidebar from './Sidebar'
import PostBox from './PostBox'
const Home = () => {
  return (
    <div>
         <Grid container spacing={3}>
          <Grid item xs >
            <Sidebar/>
          </Grid>
          <Grid item xs={9} sm={7}>
            <PostBox/>
            <Post/>
          </Grid>
          <Grid item xs>
            <RightBar/>
          </Grid>
        </Grid> 
    </div>
  )
}

export default Home