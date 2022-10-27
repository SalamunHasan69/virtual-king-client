import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const PremiumCourse = () => {

  const data = useLoaderData()
  console.log((data));

  return (
    <div ref={ref} className='mt-5 d-flex justify-content-center'>
      <Card>
        <Card.Body>
          <Card.Title><h2>Congratulation for successfully purchasing this course.</h2></Card.Title>
          <div className='d-flex justify-content-end'>
            <Pdf x={-150} y={50} targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <Button onClick={toPdf} variant="primary">Generate PDF</Button>}
            </Pdf>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PremiumCourse;
