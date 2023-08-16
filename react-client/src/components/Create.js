
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Create() {


const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [imageUrl,setImageUrl]=useState("")


  const handelClick = () =>{
    axios.post("http://localhost:3000/api/offer",{
        name:name,
        price:price,
        imageUrl:imageUrl
    })
    .then((result)=>{console.log(result)}).catch((error)=>{console.log(error)}) 

}
  
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
              name='name'
            //defaultValue={name}
              onChange={(e)=>setName(e.target.value)}
             
            />
           
          
          <TextField
            required
            id="outlined-required"
            label="price"
            name='price'
           // defaultValue={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="imageUrl"
            name='imageUrl'
          //  defaultValue={imageUrl}
            onChange={(e)=>setImageUrl(e.target.value)}
          />
          </div>
          <button
          onClick={()=>handelClick()}
          >Add</button>
        </Box>
       
      );
  
}

export default Create






















