import React from 'react';
import Button from 'react-bootstrap/Button';

export default function PartOne() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Display the image and text */}
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <img src="./images.jpg" alt="" style={{ width: '1350px', height: '490px' }} />
        <div style={{ position: 'absolute', top: '40%', left: '14%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
          <h1 style={{ color: 'blue', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', textIndent: '50px' }}>THE MOST TRUSTED</h1>
        </div>
        <div style={{ position: 'absolute', top: '41%', left: '13%', bottom: '80%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
          <h1 style={{ color: 'darkblue', fontSize: '38px', fontWeight: 'bold' }}>FABRIC STORE</h1>
        </div>
        <div style={{ position: 'absolute', top: '63%', left: '16%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
          <h5 style={{ color: 'black', fontSize: '15px', fontWeight: 'normal' }}>
            <b>"THE BIG DIFFERENCE BETWEEN COUTURE AND<br/> READY-TO-WEAR IS NOT DESIGN. IT IS THE <br/>FABRICS, THE HANDWORK, AND THE FITTINGS<br/>THE ACT OF CREATION IS THE SAME"</b>
          </h5>
          <Button variant="primary"><b>ORDER NOW</b></Button>{' '}
        </div>
      </div>
    </div>
  );
}