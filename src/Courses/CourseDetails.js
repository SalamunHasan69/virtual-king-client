import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  return (
    <div className='mt-5'>
      <h1>All courses: {courseDetails.length}</h1>
    </div>
  );
};

export default CourseDetails;