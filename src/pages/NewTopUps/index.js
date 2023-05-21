import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TeamActivityBelowButtons from "../../component-ui/TeamActivityBelowButtons";

const NewTopUps = () => {
    const [value, setValue] = useState(0);
    const data = (newdata) => {
        setValue((prev)=>(prev) + newdata)
    };
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        New Top - Ups
      </Typography>
      <Typography gutterBottom variant="h6" align="center">
        Today New Top-Ups {value}
      </Typography>
      <TeamActivityBelowButtons level="1" page="2" total={data} />
      <TeamActivityBelowButtons level="2" page="2" total={data} />
      <TeamActivityBelowButtons level="3" page="2" total={data} />
    </div>
  );
};

export default NewTopUps;
