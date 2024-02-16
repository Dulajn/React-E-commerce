import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, Form, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon

export default function Shop() {
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
      {/* Link to the Home page */}
      <div style={{ display: 'inline-block', borderRight: '1px solid black', paddingRight: '20px', paddingLeft: '30px', marginBottom: '20px' }}>
        <Link to="/" style={{ marginBottom: '10px' }}>Home</Link>
      </div>
      <div style={{ display: 'inline-block', paddingLeft: '20px', marginTop: '20px' }}>
        <b>New Arrivals</b>
      </div>

      <div>
        <div style={{ position: 'relative', margin: '20px 0 0 20px', display: 'inline-block' }}>
          <img src="./4.jpg" alt="" style={{ height: '420px', width: '310px' }} />
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light"><b>765</b></Button>{' '}
          </div>
        </div>




        
        <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '20px', marginTop: '20px' }}>

        
        <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span> 
    <span style={{ marginLeft: '25px' }}>11 Reviews</span>
       
       
        

        <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '20px', marginTop: '70px' }}></div>

        <p style={{ fontSize: '25px' }}><b>Cool Maza New Arrivals</b></p>
              
          <div style={{ marginTop: '40px' }}>
            <p style={{ marginBottom: '4px' }}>Width 60</p>
            <p style={{ marginBottom: '4px' }}>Full Color Sets Available</p>
            <p style={{ marginBottom: '4px' }}>100% Super Quality fabric</p>
            <p style={{ marginBottom: '4px' }}>Wholesale and Retail</p>
            <p style={{ marginBottom: '4px' }}>Transport and Courier Services Available</p>
            <p style={{ marginBottom: '4px' }}>Large Stock Available</p>
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '5px', marginTop: '40px' }}>
            <p style={{ fontSize: '20px' }}>Rs 390.00</p>
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '0px', marginTop: '110px' }}>
            <Button variant="outline-primary" onClick={decrementQuantity}>-</Button>{' '}
          </div>

          <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '3px', marginTop: '110px' }}>
            <Button variant="outline-primary">{quantity}</Button>{' '}
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '3px', marginTop: '110px' }}>
            <Button variant="outline-primary" onClick={incrementQuantity}>+</Button>{' '}
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '3px', marginTop: '110px' }}>
          <Button variant="outline-primary"><span role="img" aria-label="heart">&#10084;&#xFE0F;</span> WISHLIST</Button>{' '}

          </div>
          
          
        </div>
       
         
      </div>

      <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '460px', marginTop: '20px' }}>
      <Link to="/Cart"> {/* Fixing the link here */}
         <p style={{ fontSize: '25px' }}><Button variant="primary" size="sm">  <b>
          ADD TO CART
          </b></Button>{' '}</p>

             </Link>
          </div>
 


          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-70px' }}>
  <div style={{ position: 'relative', padding: '10px', borderRadius: '5px', marginRight: '10px' }}>
    <img src="./4.jpg" alt="" style={{ width: '85px', height: '100px', borderRadius: '5px' }} />
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
    <Button variant="light" style={{ padding: '2px 5px', fontSize: '10px' }}><b>765</b></Button>{' '}
    </div>
  </div>
  <div style={{ position: 'relative', padding: '10px', borderRadius: '5px', marginRight: '10px' }}>
    <img src="./4.jpg" alt="" style={{ width: '85px', height: '100px', borderRadius: '5px' }} />
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
    <Button variant="light" style={{ padding: '2px 5px', fontSize: '10px' }}><b>765</b></Button>{' '}
    </div>
  </div>
  <div style={{ position: 'relative', padding: '10px', borderRadius: '5px' }}>
    <img src="./4.jpg" alt="" style={{ width: '85px', height: '100px', borderRadius: '5px' }} />
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
    <Button variant="light" style={{ padding: '2px 5px', fontSize: '10px' }}><b>765</b></Button>{' '}
    </div>
  </div>
</div>


<div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '6px', marginTop: '60px', paddingLeft: '20px' }}>
  <p style={{ fontSize: '17px', marginBottom: '0' }}><b>Customer Reviews</b></p>
</div>

<div style={{ marginTop: '20px', marginLeft: '22px' }}>
  <p><b>11 Reviews</b></p>
</div>


<div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', marginRight: '20px', overflow: 'hidden' }}>
    <img src="girl.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', marginLeft: '5px' }} />
  </div>
  <p><b>Wathsala Gamage</b></p>
  
</div>



<div style={{ marginTop: '-15px',  marginLeft: '55px'}}>
    <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span>
    <span role="img" aria-label="star">&#11088;</span> 
</div>



<div style={{ marginTop: '-1px', marginLeft: '56px' }}>
  <p>I love product so much that i bought it again. it seems that the things I like this <br/> from Design Fabric I frequently not available months later when I want a second.<br/>This one I just had to have a spare. Highly recommend and Better than expected<br/>for the price....!!!</p>
</div>


<div style={{ marginTop: '20px', marginLeft: '50px' }}>
  <p>about 1 hour ago</p>
</div>

<div style={{ marginTop: '-39px', marginLeft: '300px' }}>
  <p>Like</p>
</div>

<div style={{ marginTop: '-39px', marginLeft: '350px' }}>
  <p>Reply</p>
</div>




<div className='abc' style={{ display: 'flex', flexDirection: 'row' }}>
  <div style={{ margin: '40px 100px 0', textAlign: 'center' }}>
    <h1 style={{ fontSize: '16px', margin: '0 0 10px', whiteSpace: 'nowrap' }}><b>THE COMPANY </b></h1>
    <ul style={{ textAlign: 'left', fontSize: '13px', lineHeight: '1.5' }}>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>TALENTS</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>CAREERS</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>ABOUT US</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>LEGAL NOTICE</li>
    </ul>
  </div>
  <div style={{ margin: '40px 100px 0', textAlign: 'center' }}>
    <h1 style={{ fontSize: '16px', margin: '0 0 10px', whiteSpace: 'nowrap' }}><b>THE COMPANY </b></h1>
    <ul style={{ textAlign: 'left', fontSize: '13px', lineHeight: '1.5' }}>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>FAQS</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>GET STORE</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>LOCATION</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>CONTACT US</li>
    </ul>
  </div>
  <div style={{ margin: '40px 100px 0', textAlign: 'center' }}>
    <h1 style={{ fontSize: '16px', margin: '0 0 10px', whiteSpace: 'nowrap' }}><b>SERVICES </b></h1>
    <ul style={{ textAlign: 'left', fontSize: '13px', lineHeight: '1.5' }}>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>SHIPPING</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>EXPERIENCES</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>BOOK A MEET</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}> OUR SERVICES</li>
    </ul>
  </div>
  <div style={{ margin: '40px 80px 0', textAlign: 'center' }}>
    <h1 style={{ fontSize: '16px', margin: '0 0 10px', whiteSpace: 'nowrap' }}><b>FOLLOW US </b></h1>
    <ul style={{ textAlign: 'left', fontSize: '13px', lineHeight: '1.5' }}>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>TWITTER</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>FACEBOOK</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>INSTAGRAM</li>
      <li style={{ marginBottom: '5px', whiteSpace: 'nowrap' }}>LINKEDIN</li>
    </ul>
  </div>
</div>







    </div>
    </div>
  );
}