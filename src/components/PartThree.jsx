import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './partthree.css';
import Button from 'react-bootstrap/Button';

export default function PartThree() {
  return (
    <div className='new1'>
      <h4><b>LAST COLLECTION</b></h4>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Link to="/shop4"> {/* Wrap all Card components with Link and provide the desired path */}
          <Card style={{ width: '18rem' }}>
            <img src="./5.jpg" alt="" style={{ height: '200px' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light"><b>763</b></Button>{' '}
           </div>
            <Card.Body>
              <Card.Title>Maza 763</Card.Title>
              <Card.Text>
                Rs.260.00
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/shop5"> {/* Repeat for each card */}
          <Card style={{ width: '18rem' }}>
            <img src="./6.jpg" alt="" style={{ height: '200px' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light"><b>770</b></Button>{' '}
           </div>
            <Card.Body>
              <Card.Title>Maza 770</Card.Title>
              <Card.Text>
                Rs.328.00
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/shop6">
          <Card style={{ width: '18rem' }}>
            <img src="./7.jpg" alt="" style={{ height: '200px' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="light"><b>772</b></Button>{' '}
           </div>
            <Card.Body>
              <Card.Title>Maza 772</Card.Title>
              <Card.Text>
                Rs.310.00
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/shop7">
          <Card style={{ width: '18rem' }}>
            <img src="./8.jpg" alt="" style={{ height: '200px' }} />
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