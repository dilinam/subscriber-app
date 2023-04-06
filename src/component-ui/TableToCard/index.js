import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TableToCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Card sx={{ m: 1, borderRadius: 3, border: "1px solid #f2e22c" }}>
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Avatar
              src="Browns1.jpg"
              sx={{
                height: 50,
                mr: 1,
                width: 50,
              }}
            />
            <Box sx={{ ml: "3" }}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ mr: 2 }}
                color="secondary"
              >
                Package name : 100USDT
              </Typography>
              <Typography gutterBottom variant="body1">
                5 x Revenue
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ display: "flex", mr: 3, m: 2 }}>
          <Typography color="subtiltle1" variant="body2">
            Daily Revenue : 1 USDT
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{ marginLeft: "auto", order: "2", border: "1px solid #fff" }}
          >
            Join
          </Button>
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            1. Subscribe Browns 1 Package selling price is 100 USDT, the income
            is 5 times the income can earn 500 USDT, you can receive 1 USDT per
            day. <br />
            2. The daily earnings are put in the equivalent value of USDT coins.{" "}
            <br />
            3. You can upgrade to any higher package at any time while still in
            the purchased package 4. Once this package is sold, it is
            non-refundable and non- exchangeable.
            <br />
          </Typography>
          <Button>click me</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TableToCard