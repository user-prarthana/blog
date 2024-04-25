import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography  
          variant="h6" 
          style={{textAlign:'left'}}
          sx={{flexGrow: 1}}>
            BlogApp
          </Typography>
          <Button color="error" variant='contained'>
            <Link to={'/add'} style={{textDecoration:'none'}}>
                Add
            </Link> 
            </Button>

          <Button color="success" variant='contained'>
            <Link to={'/view'} style={{textDecoration:'none'}}>
                View
                </Link> </Button>
                <Button color="success" variant='contained'>
            <Link to={'/my'} style={{textDecoration:'none'}}>
                Myprofile
                </Link> </Button>
                
          <Button color="secondary" variant='contained'>
            <Link to={'/'} style={{textDecoration:'none'}}>Logout</Link> </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
