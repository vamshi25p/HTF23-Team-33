import { alignProperty } from '@mui/material/styles/cssUtils';
import React from 'react';

function Footer() {
  const footerStyle = {
    fontStyle: 'italic',
    fontSize: '28px', // Increase font size as needed
    margin: '10px 0',
    marginTop: '20px', // Add margin-top to create space
    textAlign: 'center',
    
  };
  

  return (
    <div>
      <p style={footerStyle}><em>Track. Solve. Succeed</em></p>
    </div>
  );
}

export default Footer;
