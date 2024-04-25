import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Myprofile = () => {
    const [userId,setUserId] = useState(sessionStorage.getItem("Id"));
    var[data,setDate]=useState([{title:"dd"}]);
    const[myData,setMyData] = useState([]);
    console.log(userId)

    useEffect(()=>{
        axios.get("http://localhost:3010/api/Viewmypro/"+userId)
        .then((res)=>{
            console.log("hello")
            console.log(res.data)
            setMyData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>

       <Grid container spacing={2}>
        
        {myData.map((val,i)=>{
          return(
            <Grid item xs={12} sm={4} md={4}>
               <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="/static/images/cards/contemplative-reptile.jpg"
      title="green iguana"
    />
    <CardContent>
    <   Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name:{val.Name}
        </Typography>
        <Typography variant="h5" component="div">
          Email:{val.Email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Address:{val.Address}
        </Typography>
        <Typography variant="body2">
          Username:{val.Username}
          
        </Typography>
    </CardContent>
  <CardActions>
    <Button size='small'>Update</Button>
    <Button size='small'>Delect</Button>
  </CardActions>
  </Card>
            </Grid>
          )
        })}
      </Grid>
  
    </div>
  )
}

export default Myprofile
