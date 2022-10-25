import React from 'react';
import Courses from '../Courses/Courses';

const Home = () => {
  return (
    <div>
      <h1 className='d-flex justify-content-center font-monospace fw-bold fst-italic mt-5'>Keep calm and carry on</h1>
      <Courses></Courses>
    </div>
  );
};

export default Home;