import { Delete } from "@mui/icons-material";
import { Modal, Typography,Box,Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../Slices/PostSlice";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #E0417E",
    boxShadow: 24,
    p: 3,
  };


const ModalComp = ({Post,open,setOpen,handleClose}) => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user);
    const { user } = userInfo;
  const deletePost = async (postId) => {
    try {
      console.log("i was clicked", postId);
      // const response = await axios.post(
      //   `http://localhost:5000/useraction/${user._id}/removePost/${postId}`
      // );
      // console.log(response.data);
      // if (response.data.success === true){
      //   dispatch(postAction.deletePost(postId));
      
      // }
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title">Remove this post ?</Typography>
        <Button
          onClick={() => deletePost(Post)}
          sx={{ margin: "1rem 1rem 0 0" }}
          variant="outlined"
          endIcon={<Delete />}
        >
          Remove
        </Button>
        <Button sx={{ margin: "1rem 1rem 0 0" }} onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComp;
