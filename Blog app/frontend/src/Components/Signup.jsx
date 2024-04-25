import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const [inputs,setInputs]= useState({});

    const inputHandler =(e)=>{
        setInputs ({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }

    const submitHandler=()=>{
        console.log("btn click",inputs);
        axios.post("http://localhost:3010/api/post",inputs)
        .then ((res)=>{
                console.log(res);
                alert(res.data.message);
        })
    }
  return (
    <div style={{margin:'8%'}}>
      <Typography variant='h3' style={{color:"purple"}}> SIGNUP FORM
      </Typography>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
<TextField varient ='outlined'
label="Name"
fullWidth
name='Name'
onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
<TextField varient ='outlined'
label="Email"
fullWidth
name='Email'
onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
<TextField varient ='outlined'
label="Address"
fullWidth multiline rows={5}
name='Address'
onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
<TextField varient ='outlined'
label="Username"
fullWidth
name='Username'
onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
<TextField varient ='outlined'
label="Password"
fullWidth
name='Password'
onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
           <Button variant='contained' color='secondary' onClick={submitHandler}>Submit</Button>
           </Grid>
           <Grid item sx={12} sm={12} md={12}>
<Link to={'/'}>Back to Login </Link>
           </Grid>
      </Grid>
    </div>
  )
}

export default Signup
