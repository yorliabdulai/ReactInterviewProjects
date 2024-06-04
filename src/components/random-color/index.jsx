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
      <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
    </div>
  );
}   