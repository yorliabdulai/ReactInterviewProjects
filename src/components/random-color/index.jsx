import { useState } from 'react';



export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex'); 
  const [color, setColor] = useState('#000000')
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: color,
    }}>
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
}   