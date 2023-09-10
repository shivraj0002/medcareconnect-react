import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CommonModal = ({ open, setOpen, name, img, desc }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {desc}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CommonModal;
