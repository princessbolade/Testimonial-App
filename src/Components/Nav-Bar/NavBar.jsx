import { Button, Link, Toolbar, Typography } from '@mui/material';
import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
       <>
       <Toolbar sx={{flexWrap:'wrap', marginTop:'10px'}}>
<Typography sx={{flexGrow:'1'}}>
<img src="../../logo.svg" alt="" />
</Typography>
<nav>
    <Link variant='button' className='nav__links' sx={{my:'1', mx:'1.5'}}>
        About Us
    </Link>
    <Link variant='button' className='nav__links' sx={{my:'1', mx:'1.5'}}>
       Stories
    </Link>
    <Link variant='button' className='nav__links' sx={{my:'1', mx:'1.5'}}>
        Contact
    </Link>
    <Link variant='button' className='nav__links' sx={{my:'1', mx:'1.5'}}>
        Log In
    </Link>
</nav>
<Button href='#' className='sign__up__btn' sx={{my:'1', mx:'1.5'}}>
    Sign Up
</Button>

       </Toolbar>
       </>
    )
}

export default NavBar
