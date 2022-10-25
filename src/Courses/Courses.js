import React, { } from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {

  return (
    <div className='d-flex justify-content-center mt-5'>
      <button className='btn btn-outline-primary'><Link style={{ textDecoration: 'none' }} to='/Courses-info'><h5 className='text-dark px-5'>Courses</h5></Link></button>
    </div>
  );
};

export default Courses;