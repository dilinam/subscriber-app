import React from 'react'
import Promotion from '../../component-ui/Promotion'
import Typography from "@mui/material/Typography";

const PromotionBonus = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        Promotion Bonus
      </Typography>
      <Typography gutterBottom variant="h5" align="center">
        Level 1 Total Active
      </Typography>
      <Promotion members="5" value="50" />
      <Promotion members="10" value="100" />
      <Promotion members="20" value="200" />
      <Promotion members="30" value="300" />
      <Promotion members="50" value="500" />
      <Promotion members="100" value="1000" />
    </div>
  );
}

export default PromotionBonus