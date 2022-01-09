import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "/home/arun/assignments/got-app/src/assets/HeroImages/image1.jpg"
import image2 from "/home/arun/assignments/got-app/src/assets/HeroImages/image2.jpg"
import image3 from "/home/arun/assignments/got-app/src/assets/HeroImages/image3.jpg"
import image4 from "/home/arun/assignments/got-app/src/assets/HeroImages/image4.jpg"
import image5 from "/home/arun/assignments/got-app/src/assets/HeroImages/image5.jpg"
import { Carousel } from 'react-responsive-carousel';
import "./HomeDisplay.css"
import Menu from './Menu';
const HomeDisplay = () => {
    const Menus=[{
        tag:<p>The <span style={{color:'blue'}}>BOOKS</span>  of GOT</p>,
        toLink:"/books"
    },
    {
        tag:<p>The <span style={{color:'red'}}>CHARACTERS</span> of GOT</p>,
        toLink:"/characters"
    },
    {
        tag:<p>The <span style={{color:'orange'}}>HOUSES</span>  of GOT</p>,
        toLink:"/houses"
    }]
    return (
        <div>
            <div className='Carouse-wrapper'>
                <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false} showStatus={false} showIndicators={false} showThumbs={true} swipeable={true}>
                    <div>
                        <img src={image1} /> 
                    </div>
                    <div>
                        <img src={image2} /> 
                    </div>
                    <div>
                        <img src={image3} /> 
                    </div>
                    <div>
                        <img src={image4} /> 
                    </div>
                    <div>
                        <img src={image5} /> 
                    </div>
                </Carousel>
            </div>
            <h1>
                The GOT Data you need
            </h1>
            <div>
                <Menu Menus={Menus} />
            </div>
        </div>
    )
}

export default HomeDisplay
