import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon

import Home from './components/Home';
import PartTwo from './components/PartTwo';
import PartThree from './components/PartThree';
import PartFour from './components/PartFour';
import PartFive from './components/PartFive';
import Shop from './components/Shop';
import Cart from './components/Cart'; // Import Cart component
import Signup from './components/Signup';
import Signin from './components/Signin';
import Shop1 from './components/Shop1';
import Shop2 from './components/Shop2';
import Shop3 from './components/Shop3';
import Shop4 from './components/Shop4';
import Shop5 from './components/Shop5';
import Shop6 from './components/Shop6';
import Shop7 from './components/Shop7';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarContainer />
                <Home />
                <PartTwo />
                <PartThree />
                <PartFour />
                <PartFive />
            
              
             
              </>
            }
          />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop1" element={<Shop1 />} />
          <Route path="/Shop2" element={<Shop2 />} />
          <Route path="/Shop3" element={<Shop3 />} />
          <Route path="/Shop4" element={<Shop4 />} />
          <Route path="/Shop5" element={<Shop5 />} />
          <Route path="/Shop6" element={<Shop6 />} />
          <Route path="/Shop7" element={<Shop7 />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

function NavbarContainer() {
  const location = useLocation();
  const isSigninPage = location.pathname === '/Signin';

  if (isSigninPage) {
    return null; // Don't render navbar on signin page
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><b>Design Fabric</b></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Link to={'/Shop/'}><Nav.Link href="#features">Shop</Nav.Link></Link>
          <Nav.Link href="#pricing">Product</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
        <Form inline className="ms-auto">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', marginRight: '10px', overflow: 'hidden' }}>
                <FaShoppingCart style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
            </Col>
            <Col xs="auto">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', marginRight: '10px', overflow: 'hidden' }}>
                <img src="profile.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default App;