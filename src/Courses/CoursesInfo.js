import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import CourseName from './CourseName';


const CoursesInfo = () => {


  const data = useLoaderData()

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <CourseName>

          </CourseName>
        </div>
        <div className='d-flex row row-cols-1 row-cols-md-3 g-auto col-md-8'>

          {
            data.map(course =>
              <CourseDetails
                key={course.id}
                course={course}
              >
              </CourseDetails>)
          }

        </div>
      </div>
    </div>
  );
};

export default CoursesInfo;