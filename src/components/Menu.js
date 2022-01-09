import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ActionAreaCard from './Card';
import "./Menu.css"
const Menu = ({Menus}) => {
    return (
        <div className='Menu_wrapper'>
            {Menus.map((item)=>{
                return <div><ActionAreaCard item={item} /></div>
            })}
        </div>
    )
}

export default Menu
