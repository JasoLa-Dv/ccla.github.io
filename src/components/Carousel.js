import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683683371/cuota-cgpa-2022_lrlbc3.jpg"
          alt="First slide"/>        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683683362/Directiva_y77nks.jpg"
          alt="Second slide"/>
       </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683683353/infraestructura-ccla-0028_p5fk5q.jpg"
          alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;