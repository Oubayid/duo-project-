import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Update(props) {
  const { _id, name, price, imageUrl } = props.offreUpdate;
  const [names, setname] = useState('');
  const [prices, setPrice] = useState('');
  const [images, setimage] = useState('');

  useEffect(() => {
    setname(name);
    setPrice(price);
    setimage(imageUrl);
  }, []); 

  const handelClick = () => {
    axios.put(`http://localhost:3000/api/offer/${_id}`, {
      name: names,
      price: prices,
      imageUrl: images,
    })
      .then((response) => {
        console.log(response.data); 
        alert('Updated successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        <TextField
          required
          id="outlined-required"
          label="name"
          name="name"
          // defaultValue={name}
          value={names} // Use value instead of defaultValue
          onChange={(e) => setname(e.target.value)}
        />

        <TextField
          required
          id="outlined-required"
          label="price"
          name="price"
          // defaultValue={price}
          value={prices} // Use value instead of defaultValue
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="imageUrl"
          name="imageUrl"
          // defaultValue={imageUrl}
          value={images} // Use value instead of defaultValue
          onChange={(e) => setimage(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          handelClick();
        }}
      >
        Update
      </button>
    </Box>
  );
}

export default Update;
