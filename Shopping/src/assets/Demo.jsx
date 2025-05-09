import React, { useEffect, useState } from 'react'

function Demo() {
    const [productName, setProductName] = useState('');
  const [colors, setColors] = useState(['']); 
  const [newColor, setNewColor] = useState('#000000'); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    
    console.log('Product Name:', productName);
    console.log('Selected Colors:', colors);
    
    setProductName('');
    setColors(['']);
  };

  const handleColorChange = (index, value) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  const addColorField = () => {
    setColors([...colors, '']); // Add a new color input field
  };
  return (
    <div style={{paddingTop:"100px"}}><div>
    <h2>Create Product</h2>
    <form onSubmit={handleAddProduct}>
      <div>
        <label>Product Name:</label>
        <input 
          type="text" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Colors:</label>
        {colors.map((color, index) => (
          <div key={index}>
            <input 
              type="color" 
              value={color} 
              onChange={(e) => handleColorChange(index, e.target.value)} 
            />
            <button 
              type="button" 
              onClick={() => setColors(colors.filter((_, i) => i !== index))} // Remove color field
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addColorField}>Add Color</button>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div></div>
  )
}

export default Demo