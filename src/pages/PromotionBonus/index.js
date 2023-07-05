import React, { useEffect, useState } from "react";
import Promotion from "../../component-ui/Promotion";
import Typography from "@mui/material/Typography";
import { getcountRefUser } from "../../use-cases/get-count-ref-user";
import { getUserBonus } from "../../use-cases/get-bonus-user";
let bonusTypeList = [];
const PromotionBonus = () => {
  const [count, setCount] = useState(0);
  const [claimedList, setClaimedList] = useState([]);

  useEffect(() => {
    getcountRefUser().then((res) => {
      setCount(res.data);
    });
    getUserBonus().then(response => {
      setClaimedList(response.data);
      console.log(response.data);
    })
  }, []);

  claimedList.forEach((bonus) => {
    bonusTypeList.push(bonus.bonusType.id);
  });

  const resetTable = async()=>{
    getcountRefUser().then((res) => {
      setCount(res.data);
    });
    const response = await getUserBonus()
      setClaimedList(response.data);
      console.log(response.data);
  }
  console.log(count);
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        Promotion Bonus
      </Typography>
      <Typography gutterBottom variant="h5" align="center">
        Level 1 Total Active
      </Typography>
      <Promotion
        members="5"
        value="50"
        isdisabled={count >= 5 && !bonusTypeList.includes(1)}
        resetT={resetTable}
      />
      <Promotion
        members="10"
        value="100"
        isdisabled={count >= 10 && !bonusTypeList.includes(2)}
        resetT={resetTable}
      />
      <Promotion
        members="20"
        value="200"
        isdisabled={count >= 20 && !bonusTypeList.includes(3)}
        resetT={resetTable}
      />
      <Promotion
        members="30"
        value="300"
        isdisabled={count >= 30 && !bonusTypeList.includes(4)}
        resetT={resetTable}
      />
      <Promotion
        members="50"
        value="500"
        isdisabled={count >= 50 && !bonusTypeList.includes(5)}
        resetT={resetTable}
      />
      <Promotion
        members="100"
        value="1000"
        isdisabled={count >= 100 && !bonusTypeList.includes(6)}
        resetT={resetTable}
      />
    </div>
  );
};

export default PromotionBonus;
