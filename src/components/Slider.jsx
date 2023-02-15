import {React,useState} from 'react';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'
import { sliderItems } from '../data';

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleRight = () => {
    if (sliderIndex === sliderItems.length - 1) {
      return
    }else{
      setSliderIndex(sliderIndex + 1);
    };
    
  }
  const handleLeft = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex -1);
    } else {
      return
    };
    
  }
  return (
    <div className='slider-container'>
          <div className="arrow left" onClick={handleLeft} >
              <RiArrowLeftSFill style={{fontSize:"35px"}}/>
          </div>
      <div className="wrapper"  style={{ transform: `translateX( ${sliderIndex * -100}vw)` }}>
        {sliderItems.map(item => (
          <div className="slide" key={item.id}>
          <div className="imgContainer">
            <img src={item.img} alt="" />
                  </div>
          <div className="infoContainer">
              <div className="title">{item.title}</div>
              <div className="decs"><p>{item.desc}</p></div>
            <button>SHOW NOW</button>
                  </div>
              </div>
          
                ))}
          </div>
          <div className="arrow right" onClick={handleRight} >
        <RiArrowRightSFill style={{ fontSize: "35px" }} />
        </div>
      </div>
  );
}

export default Slider;
