import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CurrentCourse from './CurrentCourse';

const LoadCourse = () => {

  const data = useLoaderData();

  return (
    <div>
      {
        data.map(course =>
          <CurrentCourse
            key={course.id}
            course={course}
          >
          </CurrentCourse>)
      }
    </div>
  );
};

export default LoadCourse;