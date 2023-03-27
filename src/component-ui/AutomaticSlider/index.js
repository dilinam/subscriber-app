import React from 'react'
import '../../css/automaticslider.css'
const AutomaticSlider = () => {

  return (
    <div>
      {showSlides()}
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src="mountains.jpg" sx={{width:"100%"}} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <img src="mountains.jpg" sx={{width:"100%"}}  />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <img src="mountains.jpg" sx={{width:"100%"}}  />
          <div className="text">Caption Three</div>
        </div>
      </div>
      <br />
      <div style="text-align:center">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default AutomaticSlider;

function showSlides(slideIndex = 0) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


