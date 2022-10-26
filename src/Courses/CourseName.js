import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
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
              className='text-dark fs-5'
              to={`/course/${course.id}`}
              style={{ textDecoration: 'none' }}>
              {course.name}
              <FaArrowRight className='ms-2'></FaArrowRight>
            </Link>
          </p>)
      }
    </div>
  );
};

export default CourseName;