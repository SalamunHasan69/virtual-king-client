import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CurrentCourse = () => {

  const data = useLoaderData()
  console.log((data));
  const { image, name, title, fee } = data;

  return (
    <div className='mt-5 d-flex justify-content-center'>
      <Card className='w-25'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{title}</p>
          </Card.Text>
          <span>Course fee: ${fee}</span>
          <div className='d-flex justify-content-end'>
            <Button variant="primary"><Link className='text-white' style={{ textDecoration: 'none' }} to={`/premium-course/$${data.id}`} >Get premium access</Link></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CurrentCourse;



