import React, { } from 'react';
import Button from 'react-bootstrap/Button';


const CourseDetails = ({ card }) => {

  const { image, name } = card

  return (
    <div className='mt-5'>

      <img className='img-fluid h-75 w-full' src={image} alt="" />
      <div className='py-2'>
        <h3>{name}</h3>
      </div>
      <Button className='text-dark text-center px-5' variant="outline-primary">Details</Button>

    </div>
  );
};


export default CourseDetails;