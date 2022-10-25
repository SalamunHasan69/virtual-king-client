import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseName = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/course')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, [])

  return (
    <div className='mt-5'>
      {
        courses.map(course =>
          <p className='my-5' key={course.id}>
            <Link
              className='text-white fs-5'
              to={`/course/${course.id}`}
              style={{ textDecoration: 'none' }}>
              {course.name}
            </Link>
          </p>)
      }
    </div>
  );
};

export default CourseName;