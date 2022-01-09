import { Card } from '@mui/material'
import React from 'react'
import ActionAreaCard from './Card'
import './DataListMenu.css'
const DataListMenu = ({datas=[]}) => {
    return (
        datas.length?<div className='DataListMenu'>
            {datas?.map((item,index)=>{
                 return <ActionAreaCard key={index} item={item} index={index}/>
            })}
        </div>:null
    )
}

export default DataListMenu
