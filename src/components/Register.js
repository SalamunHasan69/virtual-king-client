import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const Register = () => {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        navigate('/login');
      })
      .catch(error => {
        console.error(error)
        setError(error.message);
      })
  };

  return (
    <div className='w-75 mx-auto'>
      <Form onSubmit={handleSubmit} className='mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className='text-danger'>
          {error}
        </Form.Text>
      </Form>
    </div>
  );
};

export default Register;