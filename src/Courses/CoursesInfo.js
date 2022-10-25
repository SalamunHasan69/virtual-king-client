import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import CourseName from './CourseName';


const CoursesInfo = () => {


  const data = useLoaderData()

  return (
    <div className='d-flex'>
      <div className='w-2/5'>
        <CourseName>

        </CourseName>
      </div>
      <div className='w-3/5'>
        {
          data.map(card =>
            <CourseDetails
              key={card.id}
              card={card}
            >
            </CourseDetails>)
        }
      </div>
    </div>
  );
};

export default CoursesInfo;