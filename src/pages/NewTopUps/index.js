import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TeamActivityBelowButtons from "../../component-ui/TeamActivityBelowButtons";

const NewTopUps = () => {
    const [value, setValue] = useState("05");
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        New Top - Ups
      </Typography>
      <Typography gutterBottom variant="h6" align="center">
        Today New Top-Ups {value}
      </Typography>
      <TeamActivityBelowButtons level="1" value="3" />
    </div>
  );
};

export default NewTopUps;
