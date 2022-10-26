import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CurrentCourse = ({ course }) => {


  const { id, image, name, title, fee } = course;

  return (
    <div>
      <Card className='mb-5'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{title}</p>
          </Card.Text>
          <span>Course fee: ${fee}</span>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CurrentCourse;