import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className='mt-5'>
      <h1 className='d-flex justify-content-center my-5'>Keep calm and carry on</h1>
      <Carousel className='w-75 mx-auto' variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 h-75 my-auto"
            src="https://www.lineageek.com/wp-content/uploads/2022/01/xCSAEp8DjjrT2UQB87AoFN-1.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src="https://aldoagostinelli.com/wp-content/uploads/2021/09/web-development-e1632124596515.jpg"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mediablog.cdnpk.net/sites/9/2021/12/What-is-the-Difference-Between-Motion-Graphics-and-Animation-1280x720px.jpg"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.designerpeople.com/wp-content/uploads/2020/01/Graphic-design-types-inspiration.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.acdsee.com/media/uploads/2021/05/08202849/Luxea-VideoEditingSoftwarePage.jpg.webp"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.curvearro.com/wp-content/uploads/2019/10/Ethical-Hacking-Curvearro.jpg"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;