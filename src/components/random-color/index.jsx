import { useState } from 'react';



export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex'); 
  const [color, setColor] = useState('#000000')

  function handleCreateRandomColor() {
    if (typeOfColor === 'hex') {
      const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      setColor(randomColor);
    } else {
      const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
      setColor(randomColor);
    }
  }
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: color,
    }}>
      <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate a Random Color</button>
     <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '60px',
      marginTop: '50px',
     }}>
      <h3>{typeOfColor === 'rgb'? 'RGB Color' : 'HEX Color'}</h3>
     <h1>{color}</h1>
     </div>
    </div>

  );
}   