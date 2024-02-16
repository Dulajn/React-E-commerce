import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './parttwo.css'
import Button from 'react-bootstrap/Button';

export default function PartTwo() {
  return (
    <div className='new'>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    <Link to="/shop">
      <Card style={{ width: '18rem', position: 'relative' }}>
        <img src="./1.jpg" alt="" style={{ height: '200px' }} />
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <Button variant="light"><b>765</b></Button>{' '}
        </div>
        <Card.Body>
          <Card.Title>Maza 765</Card.Title>
          <Card.Text>
            Rs.360.00
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
        {/* Repeat the same structure for other cards */}
        {/* Make sure to adjust the image src, Card.Title, and Card.Text accordingly */}

        <Link to="/shop1"> {/* Link to the "shop" page */}
          <Card style={{ width: '18rem' }}>
            <img src="./2.jpg" alt="" style={{ height: '200px' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light"><b>770</b></Button>{' '}
           </div>
            <Card.Body>
              <Card.Title>Maza 770</Card.Title>
              <Card.Text>
                Rs.368.00
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Repeat the same structure for other cards */}
        {/* Make sure to adjust the image src, Card.Title, and Card.Text accordingly */}
        
        <Link to="/shop2"> {/* Link to the "shop" page */}
          <Card style={{ width: '18rem' }}>
            <img src="./3.jpg" alt="" style={{ height: '200px' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light"><b>600</b></Button>{' '}
           </div>
            <Card.Body>
              <Card.Title>Maza 600</Card.Title>
              <Card.Text>
                Rs.340.00
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Repeat the same structure for other cards */}
        {/* Make sure to adjust the image src, Card.Title, and Card.Text accordingly */}

        <Link to="/shop3"> {/* Link to the "shop" page */}
          <Card style={{ width: '18rem' }}>
            <img src="./4.jpg" alt="" style={{ height: '200px' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light"><b>770</b></Button>{' '}
           </div>
            <Card.Body>
              <Card.Title>Maza 770</Card.Title>
              <Card.Text>
                Rs.390.00
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
}