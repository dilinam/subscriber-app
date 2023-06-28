import { Button } from "@mui/material";
import { rejectAsset } from "../../use-cases/reject-asset";

export const AssetRejectButton = ({ row, setTableRefreshFlag }) => {

    const handleClick = () => {
      rejectAsset(row).then(() => {
        setTableRefreshFlag(prev => !prev);
      });
    }

  return (
    <Button
      variant="contained"
      color={'error'}
      onClick={handleClick}
      fullWidth
    >
      Reject {row.paymentType.id === 1 ? "Withdrawal" : "Diposit"}
    </Button>
  );
};
