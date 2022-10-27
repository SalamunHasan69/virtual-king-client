import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';



const Login = () => {

  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
      })

      .catch(error => {
        console.error(error)
        setError(error.message);
      });
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
      })
      .catch(error => console.error(error))
  };
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then(result => {
        const user = result.user
        console.log(user);
      })
      .catch(error => console.error(error))
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from])

  return (
    <div className='w-75 mx-auto'>
      <Form onSubmit={handleSubmit} className='mt-5'>
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
          {error}
        </Form.Text>
        <p className='mt-2'><small>Don't have an account?</small> <Link to='/register'>Register</Link></p>
        <ButtonGroup vertical className='mt-4 d-flex align-item-center'>
          <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
          <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default Login;