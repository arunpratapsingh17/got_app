import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router';
import "./Header.css"
import titleImage from "../assets/got_original.jpeg"
const Header = ({HeaderContent}) => {
    const { dataList } = useParams();
    console.log(dataList);
    // dataList = dataList.charAt(0).toUpperCase() + dataList.slice(1);
    return (
        <div className="Header">
            <div className='container'>
                <Link to="/">
                 <img clasName='Title-Img' src={titleImage}/>
                </Link>
            </div>
            <div className='Links'>
                {HeaderContent.map((item)=>{
                    return <Link to={item.link} key={item.name} className='Link'>
                    <h3>{item.name}</h3>
                </Link>
                })}
            </div>
        </div>
    )
}

export default Header
