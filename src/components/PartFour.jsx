import React from 'react'
import Button from 'react-bootstrap/Button';

export default function PartFour() {
  return (
    <div>
    <div style={{ position: 'relative', marginLeft: '30px', marginTop: '30px' }}>
      {/* Display the image and text */}
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <img src="./fabric.jpg" alt="" style={{ width: '1250px', height: '200px' }} />
        <div style={{ position: 'absolute', top: '30%', left: '70%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
          <h1 style={{ color: 'darkblue', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textIndent: '50px' }}>JOIN OUR NEWSLETTER</h1>
        </div>
        
        <div style={{ position: 'absolute', top: '40%', left: '70%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
          <h5 style={{ color: 'black', fontSize: '16px', fontWeight: 'normal' }}>
            <b>Sig-nup for deals, new products and promotions</b>
          </h5>
        </div>
  
        <div style={{ position: 'absolute', top: '70%', left: '70%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
          <p style={{ color: 'gray', fontSize: '16px', fontWeight: 'normal' }}>
           Email Address
          </p>
          <Button variant="primary"><b>Sign Up</b></Button>{' '}
          
        </div>
      
      </div>
    </div>
  </div>
  )
}
