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
      <Promotion  members="5" value="50" />
      <Promotion members="10" value="150" />
    </div>
  );
}

export default PromotionBonus