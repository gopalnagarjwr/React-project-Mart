import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import data from './utils/Data';
function Slider() {
  return (
    <div  className='mb-3 position-relative'>
    <Carousel data-bs-theme="dark">
    {
      data.map((item)=>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={item.img}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    )

    }
   
    </Carousel>
    </div>
  );
}

export default Slider;