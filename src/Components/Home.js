import { Grid } from '@mui/material'
import React from 'react'
import RightBar from './RightBar'
import Sidebar from './Sidebar'
import PostBox from './PostBox'
const Home = () => {
  return (
    <>
         <Grid container>
          <Grid item xs >
            <Sidebar/>
          </Grid>
          <Grid item xs={6} sm={7}>
            <PostBox/>
          </Grid>
          <Grid item xs>
            <RightBar/>
          </Grid>
        </Grid> 
    </>
  )
}

export default Home