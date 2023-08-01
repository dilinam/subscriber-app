import { Box, Typography } from "@mui/material";
import React from "react";
import RulesComponent from "../../component-ui/RuleComponent";

const Rules = () => {
  return (
    <div>
      <RulesComponent
        title="Instruction 1"
        description="The first thing you need to do to get the benefits of DTF is, buying an investment plan that suits you.
            (Lifetime activation fee 10 USDT)"
      />
      <RulesComponent
        title="Instruction 2"
        description="You can get maximum income of up to 200% on any package you buy by joining DTF."
      />
      <RulesComponent
        title="Instruction 3"
        description="In addition to the above income, if you are an active member in the organization, you can get a maximum income of up to 400%."
      />
      <RulesComponent
        title="Instruction 4"
        description="your investment plan will be automatically deactivated after getting the maximum income as per your package and if you want to earn more you can buy again any investment plan you want."
      />
      <RulesComponent
        title="Instruction 5"
        description="You can connect many DTF accounts to one crypto wallet as you want."
      />
      <RulesComponent
        title="Instruction 6"
        description="When receiving the first payment, you must present your identification certificate  (National ID, Driving license or Passport) a front photo, a back photo and a selfie photo along with the identification certificate  that you are presenting."
      />
      <RulesComponent
        title="Instruction 7"
        description="The organization has full authority to temporarily block the adding of new members and package updates during certain periods depending on how the organization is making profits, and during that period all other services of the organization (cash withdrawals, team reward, birthday gift) will operate as usual."
      />
      <RulesComponent
        title="Instruction 8"
        description="Weekend holidays are used for system maintenance of the company.  In case of maintenance, you will be informed about it and you will not be able to access your account until the maintenance period is over."
      />
    </div>
  );
};

export default Rules;
