import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Login = () => {

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
      })
      .catch(error => console.error(error))
  }

  return (
    <div className='w-50 mx-auto'>
      <Form className='mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className='text-danger'>
          {/* {error} */}
        </Form.Text>
        <ButtonGroup vertical className='mt-4 d-flex align-item-center'>
          <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-dark"><FaGoogle></FaGoogle> Login with Google</Button>
          <Button variant="outline-dark"><FaFacebook></FaFacebook> Login with Facebook</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default Login;