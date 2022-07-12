import { Button, CardActions, CardContent, Typography,Card, Avatar, CardHeader } from '@mui/material'
import React from 'react'

const Suggestions = ({name,username,avatar,userId,bio}) => {
  return (
    <Card sx={{ minWidth: 100,mt:"1rem"}}>
    <CardContent>
    <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}/>
        }
       
        title={username}
        subheader={name}
      />
      <Typography variant="body2">
      {bio}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Follow</Button>
    </CardActions>
  </Card>
  )
}

export default Suggestions