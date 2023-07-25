import {useEffect,useState}from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ActivityIncomeData from "../../component-ui/ActivityIncomeData";
import { getRefComUser } from "../../use-cases/get-RefCom-user";

const ActivityIncome = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    getRefComUser().then((rev) => setData(rev.data));
  },[])
  return (
    <div>
      <Typography variant="h5" gutterBottom align="center">
        Activity Income
      </Typography>
      <Divider sx={{ m: 3 }} />
      <Stack divider={<Divider />} spacing={2} sx={{ m: 3 }}>
        {data.map((asset,index) => (
          <ActivityIncomeData
          key={index}
            time={asset.dateTime.split("T")[1]}
            date={asset.dateTime.split("T")[0]}
            amount={asset.amount}
            type={asset.paymentType.type}
            description={asset.description}
          />
        ))}
      </Stack>
    </div>
  );
};

export default ActivityIncome;
