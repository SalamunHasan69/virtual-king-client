import React, { useEffect, useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/course')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])

  return (
    <div className='d-flex justify-content-center mt-5'>
      <DropdownButton variant='outline-dark' id="dropdown-basic-button" title="Courses">
        <ul>
          <li><Link className='text-dark' style={{ textDecoration: 'none' }} to='/'>1</Link></li>
          <li><Link className='text-dark' style={{ textDecoration: 'none' }} to='/'>2</Link></li>
          <li><Link className='text-dark' style={{ textDecoration: 'none' }} to='/'>3</Link></li>
          <li><Link className='text-dark' style={{ textDecoration: 'none' }} to='/'>4</Link></li>
          <li><Link className='text-dark' style={{ textDecoration: 'none' }} to='/'>5</Link></li>
          <li><Link className='text-dark' style={{ textDecoration: 'none' }} to='/'>6</Link></li>
        </ul>
      </DropdownButton>
    </div>
  );
};

export default Courses;