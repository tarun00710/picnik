import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

const Eachcomment = ({ comment }) => {
  return (
    <>
    
    <Card sx={{ maxWidth: 420, marginBottom: "0.5rem" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "#E0417E" }}
            aria-label="recipe"
            src={comment.author.avatar}
          ></Avatar>
        }
        title={comment.author.username}
       subheader={comment.createdAt}
      />
      <CardContent>{comment.message}</CardContent>
    </Card>
    </>
  );
};

export default Eachcomment;
