import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link component
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigate to the Signin page when Sign Up button is clicked
    navigate('/signin');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '115px' }}>
        <div>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: '300px', marginTop: '10px' }}>Your name</Form.Label>
              <Form.Control type="name" placeholder="Your name" style={{ width: '300px', marginLeft: '300px', marginTop: '5px' }} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: '300px', marginTop: '10px' }}>Username</Form.Label>
              <Form.Control type="name" placeholder="Username" style={{ width: '300px', marginLeft: '300px', marginTop: '5px' }} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: '300px', marginTop: '10px' }}>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" style={{ width: '300px', marginLeft: '300px', marginTop: '5px' }} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: '300px', marginTop: '10px' }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" style={{ width: '300px', marginLeft: '300px', marginTop: '5px' }} />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleSignIn} style={{ marginLeft: '400px', marginTop: '20px', textAlign: 'center', width: '200px' }}>
              <b>Sign Up</b>
            </Button>

            <Form.Group className="mb-4" controlId="formBasicCheckbox" style={{ marginLeft: '320px', marginTop: '-80px' }}>
              <Form.Check type="checkbox" label="I agree with Privacy Policy and Terms of Use" />
            </Form.Group>
          </Form>
        </div>

        <div>
          <div style={{ color: 'black', marginLeft: '-400px', marginTop: '30px' }}>
            <div>
            </div>
          </div>
        </div>

        <img src="./signup.jpg" alt="" style={{ width: '600px', height: '650px', marginLeft: '20px', marginTop: '-120px' }} />
      </div>

      <div style={{ color: 'darkblue', marginLeft: '340px', marginTop: '-630px' }}>
        <h1><b>Design Fabric</b></h1>
      </div>

      <div style={{ color: 'black', marginLeft: '230px', marginTop: '-10px' }}>
        <h2><b>Sign Up</b></h2>
        <div>
          <p>
            Already have an Account?{' '}
            <Link to="/signin" style={{ color: 'blue' }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}