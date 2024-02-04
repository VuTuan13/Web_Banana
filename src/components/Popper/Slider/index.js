import classNames from "classnames/bind";
import styles from './Slider.module.scss';
import { useState } from "react";

const cx = classNames.bind(styles);

const Slider = ({ images }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className={cx('slider')}>
        <button onClick={handlePrev}>&lt;</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button onClick={handleNext}>&gt;</button>
      </div>
    );
  };
  
  export default Slider;