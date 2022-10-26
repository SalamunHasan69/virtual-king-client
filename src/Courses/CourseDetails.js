import React, { } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CourseDetails = ({ course }) => {

  const { image, name } = course

  return (
    <div className='mt-5'>

      <img className='img-fluid h-75 w-full' src={image} alt="" />
      <div className='py-2'>
        <h3>{name}</h3>
      </div>
      <Button className='text-dark text-center px-5' variant="outline-primary"><Link className='text-dark' to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>Details</Link></Button>

    </div>
  );
};


export default CourseDetails;