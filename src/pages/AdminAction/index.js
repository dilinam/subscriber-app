import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
  getDisabledReg,
  setDisabledReg,
} from "../../use-cases/get-disabled-reg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AdminAction = () => {
  const [isRegDisabled, setIsRegDisabled] = React.useState(false);
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    getDisabledReg().then((response) => {
      if (response.data.value === "TRUE") {
        setIsRegDisabled(true);
      }
    });
  }, []);

  const setDisabled = () => {
    MySwal.fire({
      title: "Are You Sure This Action?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsRegDisabled(prev => !prev);
        if (isRegDisabled) {
          setDisabledReg("FALSE")
            .then(
              MySwal.fire("success!", "Deactivation successful....!", "success")
            )
            .catch((e) => {
              MySwal.fire("ERROR", e.response.data, "error");
            });
        } else {
          setDisabledReg("TRUE")
            .then(
              MySwal.fire("success!", "Activation successful....!", "success")
            )
            .catch((e) => {
              MySwal.fire("ERROR", e.response.data, "error");
            });
        }
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        MySwal.fire("Cancelled", "Action is cancelled", "error");
      }
    });
  };
  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Typography gutterBottom variant="h5" align="center">
          Admin Action
        </Typography>
      </Box>
      <Box align="center">
        <Button
          sx={{
            mt: "10%",
            width: "80%",
          }}
          variant="outlined"
          size="large"
          color="primaryVariant"
          onClick={() => {
            setDisabled();
          }}
        >
          {isRegDisabled ? "Enable" : "Disable"} Reg & Package Active
        </Button>
      </Box>
    </div>
  );
};

export default AdminAction;
