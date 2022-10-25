import React, { useEffect, useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';


const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/course')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, [])

  return (
    <section>
      <div>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <div>
          <DropdownButton className='' variant='outline-dark' id="dropdown-basic-button" title="Courses">
            {
              courses.map(course => <p className='px-2' key={course.id}>
                <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>{course.name}</Link>
              </p>)
            }
          </DropdownButton>
        </div>
      </div>
    </section>
  );
};

export default Courses;