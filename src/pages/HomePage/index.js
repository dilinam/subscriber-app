import React from 'react'
import AutomaticSlider from '../../component-ui/AutomaticSlider';
import ImgStack from '../../component-ui/ImgStack';
import { Box } from '@mui/material';
const HomePage = () => {

  return (
    <div>
      <Box sx={{align:"center"}}>
        <AutomaticSlider />
        <ImgStack />
      </Box>
    </div>
  );
}

export default HomePage;