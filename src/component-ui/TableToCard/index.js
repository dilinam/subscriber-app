import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
      <Card
        sx={{
          maxWidth: "100%",
          m: 1,
          borderRadius: 5,
        }}
      >
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen}>Active</Button>
        </CardActions>
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
            day. <br/>
            2. The daily earnings are put in the equivalent value of USDT coins.{" "}
            <br/>
            3. You can upgrade to any higher package at any time while still in
            the purchased package 4. Once this package is sold, it is
            non-refundable and non- exchangeable.
            <br/>
          </Typography>
          <Button>click me</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TableToCard