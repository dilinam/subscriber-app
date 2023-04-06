import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TeamActivityBelowButtons from "../../component-ui/TeamActivityBelowButtons";

const NewRegistration = () => {
     const [value, setValue] = useState("05");
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        New Registration
      </Typography>
      <Typography gutterBottom variant="h6" align="center">
        Today new registration {value}
      </Typography>
      <TeamActivityBelowButtons level="1" value="3" sx={{borderColor: "primaryVariant"}}/>
      <TeamActivityBelowButtons level="2" value="5" />
    </div>
  );
}

export default NewRegistration