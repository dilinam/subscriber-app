import { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";

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

const Recharge = () => {
  const [amount, setAmount] = useState("");
  const[open, setOpen] = useState(false);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleClick = (e) => {
    setAmount((pre) => e.target.value);
  };
  
  const handleRecharge = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            USDT(TRC20-2)
          </Typography>
          <div>
            <FormControl sx={{ m: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                name="amount"
                onChange={handleChange}
                value={amount}
                type="number"
              />
            </FormControl>
          </div>
        </Box>
        <Box sx={{ "& button": { m: 1, width: 90 } }}>
          <div>
            <Button
              variant="outlined"
              size="medium"
              value="10"
              onClick={handleClick}
            >
              10
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="20"
              onClick={handleClick}
            >
              20
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="50"
              onClick={handleClick}
            >
              50
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              size="medium"
              value="100"
              onClick={handleClick}
            >
              100
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="200"
              onClick={handleClick}
            >
              200
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="500"
              onClick={handleClick}
            >
              500
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              size="medium"
              value="1000"
              onClick={handleClick}
            >
              1000
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="5000"
              onClick={handleClick}
            >
              5000
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="10000"
              onClick={handleClick}
            >
              10000
            </Button>
          </div>
        </Box>
      </Grid>
      <Box>
        <Button fullWidth variant="contained" onClick={handleRecharge}>
          Recharge
        </Button>
      </Box>
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
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I have read in details "
            />
          </FormGroup>
          <Button fullWidth variant="contained" onClick={handleClose}>
            Done
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Recharge;
