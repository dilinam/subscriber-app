import React, { useEffect, useState } from "react";
import Promotion from "../../component-ui/Promotion";
import Typography from "@mui/material/Typography";
import { getcountRefUser } from "../../use-cases/get-count-ref-user";
import { getUserBonus } from "../../use-cases/get-bonus-user";
let bonusTypeList = [];
const PromotionBonus = () => {
  const [count, setCount] = useState(50);
  const [claimedList, setClaimedList] = useState([]);

  useEffect(() => {
    getUserBonus().then((res) => {
      setClaimedList(res.data);
      console.log(res.data);
    });
  }, []);
  {
    claimedList.map((bonus) => {
      bonusTypeList.push(bonus.bonusType.id);
    });
  }
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
        count={count >= 5 && !bonusTypeList.includes(1)}
      />
      <Promotion
        members="10"
        value="100"
        count={count >= 10 && !bonusTypeList.includes(2)}
      />
      <Promotion
        members="20"
        value="200"
        count={count >= 20 && !bonusTypeList.includes(3)}
      />
      <Promotion
        members="30"
        value="300"
        count={count >= 30 && !bonusTypeList.includes(4)}
      />
      <Promotion
        members="50"
        value="500"
        count={count >= 50 && !bonusTypeList.includes(5)}
      />
      <Promotion
        members="100"
        value="1000"
        count={count >= 100 && !bonusTypeList.includes(6)}
      />
    </div>
  );
};

export default PromotionBonus;
