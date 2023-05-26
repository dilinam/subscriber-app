import { Button } from "@mui/material";
import { acceptAsset } from "../../use-cases/accept-asset";

export const AssetApprovalButton = ({ row, setTableRefreshFlag }) => {

    const handleClick = () => {
        acceptAsset(row).then(() => {
            setTableRefreshFlag(prev => !prev);
        }); 
    }

  return (
    <Button
      variant="contained"
      color={row.paymentType.id === 1 ? "warning" : "success"}
      onClick={handleClick}
      fullWidth
    >
      Accept {row.paymentType.id === 1 ? "Withdrawal" : "Diposit"}
    </Button>
  );
};
