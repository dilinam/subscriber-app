import React from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { getUserDetails } from "../../use-cases/get-user-details";
import { saveAsset } from "../../use-cases/save-recharge";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmMsg = (props) => {
      const [open, setOpen] = React.useState(false);
      const [user, setUser] = React.useState({});

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
      const save= () => {
        setOpen(false);
        saveAsset(user,props.amount, 1);
      };
      React.useEffect(() => {
         getUserDetails().then((res) => setUser(res.data));
       }, []);
  return (
    <div>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        {props.buttonName}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={save} 
          variant="contained">
            Yes
          </Button>
          <Button 
          onClick={handleClose} 
          variant="contained">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmMsg