import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Navbar, Container, Nav, Form, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon

export default function End() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (

    <div>
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


    <div>
      <div style={{ display: 'inline-block', borderRight: '1px solid black', paddingRight: '20px', paddingLeft: '30px', marginBottom: '20px' }}>
        <Link to="/" style={{ marginBottom: '10px' }}>Home</Link>
      </div>

      <div style={{ display: 'inline-block', paddingLeft: '20px', marginTop: '20px' }}>
        <b>Cart</b>
      </div>

      <div style={{ marginTop: '20px', marginLeft: '20px' }}>
        <p><b>My Cart</b></p>
      </div>

      <div>
        <div style={{ position: 'relative', margin: '20px 0 0 20px', display: 'inline-block' }}>
          <img src="./1.jpg" alt="" style={{ height: '150px', width: '120px' }} />
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light" style={{ padding: '2px 5px', fontSize: '10px' }}><b>765</b></Button>{' '}
          </div>
        </div>
      </div>

      <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '180px', marginTop: '-155px' }}>
        <p style={{ fontSize: '20px' }}><b>Cool Maza New Arrivals</b></p>
      </div>

      <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '180px', marginTop: '-155px' }}>
  <p style={{ fontSize: '18px' }}>Rs 360.00</p>
  </div>

  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '150px', marginTop: '-155px' }}>
  <Button variant="outline-primary" style={{ fontSize: '8px' }}><span role="img" aria-label="wrong" style={{ fontSize: '14px' }}>❌</span> </Button>{' '}
</div>


      <div style={{ marginTop: '-140px', marginLeft: '180px' }}>
  <p style={{ marginBottom: '4px' }}>Width 60</p>
  <p style={{ marginBottom: '4px' }}>Full Color Sets Available</p>
  <p style={{ marginBottom: '4px' }}>
    {showMore ? (
      <>
        100% Super Quality fabric <Button variant="link" onClick={toggleShowMore}>See Less</Button>
      </>
    ) : (
      <>
        100% Super Quality fabric <Button variant="link" onClick={toggleShowMore}>See More...</Button>
      </>
    )}
  </p>
  {showMore && (
    <>
      <p style={{ marginBottom: '4px' }}>Wholesale and Retail</p>
      <p style={{ marginBottom: '4px' }}>Transport and Courier Services Available</p>
      <p style={{ marginBottom: '4px' }}>Large Stock Available</p>
    </>
  )}
</div>

<div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '570px', marginTop: '-70px' }}>
  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '0px', marginTop: '0px' }}>
    <Button variant="outline-primary" onClick={decrementQuantity}>-</Button>{' '}
  </div>
  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '3px', marginTop: '0px' }}>
    <Button variant="outline-primary">{quantity}</Button>{' '}
  </div>
  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '3px', marginTop: '0px' }}>
    <Button variant="outline-primary" onClick={incrementQuantity}>+</Button>{' '}
  </div>
</div>

<hr/>





   


      <div>
        <div style={{ position: 'relative', margin: '20px 0 0 20px', display: 'inline-block' }}>
          <img src="./2.jpg" alt="" style={{ height: '150px', width: '120px' }} />
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light" style={{ padding: '2px 5px', fontSize: '10px' }}><b>1170</b></Button>{' '}
          </div>
        </div>
      </div>

      <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '180px', marginTop: '-155px' }}>
        <p style={{ fontSize: '20px' }}><b>Cool Maza New Arrivals</b></p>
      </div>

      <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '180px', marginTop: '-155px' }}>
  <p style={{ fontSize: '18px' }}>Rs 368.00</p>
  </div>

  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '150px', marginTop: '-155px' }}>
  <Button variant="outline-primary" style={{ fontSize: '8px' }}><span role="img" aria-label="wrong" style={{ fontSize: '14px' }}>❌</span> </Button>{' '}
</div>


      <div style={{ marginTop: '-140px', marginLeft: '180px' }}>
  <p style={{ marginBottom: '4px' }}>Width 60</p>
  <p style={{ marginBottom: '4px' }}>Full Color Sets Available</p>
  <p style={{ marginBottom: '4px' }}>
    {showMore ? (
      <>
        100% Super Quality fabric <Button variant="link" onClick={toggleShowMore}>See Less</Button>
      </>
    ) : (
      <>
        100% Super Quality fabric <Button variant="link" onClick={toggleShowMore}>See More...</Button>
      </>
    )}
  </p>
  {showMore && (
    <>
      <p style={{ marginBottom: '4px' }}>Wholesale and Retail</p>
      <p style={{ marginBottom: '4px' }}>Transport and Courier Services Available</p>
      <p style={{ marginBottom: '4px' }}>Large Stock Available</p>
    </>
  )}
</div>

<div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '570px', marginTop: '-70px' }}>
  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '0px', marginTop: '0px' }}>
    <Button variant="outline-primary" onClick={decrementQuantity}>-</Button>{' '}
  </div>
  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '3px', marginTop: '0px' }}>
    <Button variant="outline-primary">{quantity}</Button>{' '}
  </div>
  <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '3px', marginTop: '0px' }}>
    <Button variant="outline-primary" onClick={incrementQuantity}>+</Button>{' '}
  </div>
</div>



<div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '-270px', marginTop: '50px', marginBottom: '20px' }}>
  <Button variant="primary" size="lg"><b>
    CHECKOUT
    </b></Button>{' '}
</div>




    </div>
    </div>
  );
}