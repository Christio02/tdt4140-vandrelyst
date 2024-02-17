import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from '../pages/champsElysees.jpg';
import SecondImage from '../pages/eiffelAttraction.jpg';
import ThirdImage from '../pages/paris.jpg';


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel' style={{height:'90vh'}}>
      <Carousel.Item>
        <img 
         src={FirstImage} 
         alt= "First slide"
         />
        <Carousel.Caption>
          <h3>Champs-Élysees</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
         src={SecondImage} 
         alt= "Second slide"
         /><Carousel.Caption>
          <h3>Eiffel tower</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
         src={ThirdImage} 
         alt= "Third slide"
         /><Carousel.Caption>
          <h3>Paris</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;