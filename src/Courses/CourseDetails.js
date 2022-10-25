import React, { } from 'react';
import Button from 'react-bootstrap/Button';


const CourseDetails = ({ card }) => {

  const { image, name } = card

  return (
    <div className="grid grid-cols-3 gap-4">
      <img src={image} alt="" className="object-cover object-center w-25 rounded-t-md h-72 dark:bg-gray-500" />
      <div>
        <div className="py-2">
          <h3 className="tracking-wide">{name}</h3>
        </div>
        <Button className='px-5 text-white text-center' variant="outline-primary">Course Details</Button>
      </div>
    </div>
  );
};

export default CourseDetails;