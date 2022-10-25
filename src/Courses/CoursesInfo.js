import React, { } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import CourseName from './CourseName';


const CoursesInfo = () => {

  // const courseDetails = useLoaderData()

  return (
    <Container>
      <Row>
        <Col lg="6">
          <CourseName></CourseName>
        </Col>
        <Col lg="6">
          <CourseDetails></CourseDetails>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesInfo;