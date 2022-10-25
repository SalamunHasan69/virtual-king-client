import React, { } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseDetails from './CourseDetails';
import CourseName from './CourseName';


const CoursesInfo = () => {


  return (
    <Container>
      <Row>
        <Col lg="4">
          <CourseName></CourseName>
        </Col>
        <Col lg="8">
          <CourseDetails></CourseDetails>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesInfo;