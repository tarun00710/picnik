import { Box, TextField } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box sx={{display:{xs:"none",sm:"block"}}}>
          <TextField id="outlined-basic" label="Search people" variant="outlined" />
    </Box>
  )
}

export default RightBar