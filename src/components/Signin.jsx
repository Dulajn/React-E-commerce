import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'; // Import Link component

export default function Signup() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigate to the home page when Sign In button is clicked
    navigate('/');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: '300px', marginTop: '180px' }}>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" style={{ width: '300px', marginLeft: '300px', marginTop: '1px' }} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: '300px', marginTop: '30px' }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" style={{ width: '300px', marginLeft: '300px', marginTop: '1px' }} />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleSignIn} style={{ marginLeft: '400px', marginTop: '80px', textAlign: 'center', width: '200px' }}>
              <b>Sign In</b>
            </Button>

            <Form.Group className="mb-4" controlId="formBasicCheckbox" style={{ marginLeft: '320px', marginTop: '-110px' }}>
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <div style={{ marginLeft: '550px', marginTop: '-47px' }}>
              <p><b>Forgot Password</b></p>
            </div>
          </Form>
        </div>

        <div>
          <div style={{ color: 'darkblue', marginLeft: '-350px', marginTop: '20px' }}>
            <h1><b>Design Fabric</b></h1>
          </div>

          <div style={{ color: 'black', marginLeft: '-400px', marginTop: '30px' }}>
            <h2><b>Log In</b></h2>
            <div>
            <p>
            Already have an Account?{' '}
            <Link to="/signup" style={{ color: 'blue' }}>
              Sign Up
            </Link>
          </p>
              
            </div>
          </div>
        </div>

        <img src="./signin.jpg" alt="" style={{ width: '550px', height: '650px', marginLeft: '20px' }} />
      </div>
    </div>
  );
}