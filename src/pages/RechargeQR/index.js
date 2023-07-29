import React from 'react'
import { useState, useEffect} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { saveAsset } from '../../use-cases/save-recharge';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"

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

const RechargeQR = () => {
  const MySwal = withReactContent(Swal);
    const [isCopied, setIsCopied] = useState(false);
    const [open, setOpen] = useState(false);
    const handleRecharge = () => {
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
    let navigate = useNavigate();
    
    const routeChange = (value) => {
      navigate(value);

    };
    const save = async(amount) =>{
        saveAsset(amount, 2)
          .then(()=>{MySwal.fire(
            "Good job!",
            "Present your USDT deposit receipt to customer services and comfrom the deposit.",
            "success"
          );})
          .catch(()=>{MySwal.fire("ERROR!", "Somthing Went Wrong", "error");});
    };
    const location = useLocation();
    const amount = location.state.recharge;
  return (
    <div>
      <Card sx={{ m: 1, borderRadius: 5, backgroundColor: "transparent" }}>
        <CardContent>
          <Typography color="text.secondary" variant="h5">
            Deposit USDT
          </Typography>
          <br />
          <Box align="center">
            <img src="QR.jpg" />
          </Box>
          <br />
          <Typography color="text.secondary">Wallet Address : </Typography>

          <Typography color="text.secondary" variant="caption">
            TPXqEvFBzYi5tBwViGtFu6dTeKZEgS3qeU
          </Typography>
          <CopyToClipboard
            text={"TPXqEvFBzYi5tBwViGtFu6dTeKZEgS3qeU"}
            onCopy={() => {
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 1000);
            }}
          >
            <Button size="small" endIcon={<ContentCopyIcon />} marginLeft="5" >
              Copy
            </Button>
          </CopyToClipboard>
          {isCopied ? <p>copied</p> : null}
          <br />
          <br />
          <Typography color="text.secondary">Network : </Typography>

          <Typography color="text.secondary" variant="caption">
            Tron(TRC20-2)
          </Typography>
          <br />
          <br />
          <Typography color="text.secondary">See more Details : </Typography>
          <Box>
            <Typography
              color="lightblue"
              variant="caption"
              onClick={handleRecharge}
            >
              Click here to Details
            </Typography>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                align="center"
              >
                Details
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                1. Subscribe Browns 1 Package selling price is 100 USDT, the
                income is 5 times the income can earn 500 USDT, you can receive
                1 USDT per day. <br />
                <br />
                2. The daily earnings are put in the equivalent value of USDT
                coins. <br />
                <br />
                3. You can upgrade to any higher package at any time while still
                in the purchased package <br />
                <br />
                4. Once this package is sold, it is non-refundable and
                non- exchangeable.
                <br />
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
          <br />
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              routeChange(`/recharge`);
              save(amount);
            }}
          >
            Confirm Recharge
          </Button>
        </CardContent>
      </Card>
      <div></div>
    </div>
  );
}

export default RechargeQR