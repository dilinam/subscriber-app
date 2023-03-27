import React from 'react'
import Heroslider,{Slide} from 'hero-slider'
const AutomaticSlider = () => {

  return (
    <div sx={{ float: "right", width: "100px" }}>
      <Heroslider
        slideAnimation="left_to_right"
        orientaion="horizontal"
        initialState={1}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          scheduleAutoplay: true,
          autoplayDuration: 5000,
        }}
      >
        <Slide
          background={{
            backgroundImage: "mountains.jpg"
          }}
        ></Slide>
        <Slide
          background={{
            backgroundImage: "mountains.jpg"
          }}
        ></Slide>
        <Slide
          background={{
            backgroundImage: "mountains.jpg"
          }}
        ></Slide>
      </Heroslider>
    </div>
  );
}

export default AutomaticSlider

