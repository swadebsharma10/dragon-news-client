import { Carousel } from "react-bootstrap";
import iPhone from '../assets/iphone-13.jpg';
import samsung from '../assets/samsung-tablet.jpg';
import sony from '../assets/sony-headphone.jpg';

const BrandCarusel = () => {
    return (
      
        <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={iPhone} alt="Brand" />
         
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={samsung} alt="Brand" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={sony} alt="Brand" />
        </Carousel.Item>
      </Carousel> 
       
    );
};

export default BrandCarusel;