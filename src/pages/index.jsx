import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Control from '../components/Control'
import { InfoObjOne, InfoObjTwo, InfoObjThree, InfoObjFour, InfoObjFive, InfoObjSix } from '../components/Info/Data'
import Hero from '../components/Hero'
import Info from '../components/Info'
import { ControlObjOne, ControlObjTwo, ControlObjThree } from '../components/Control/Data'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import Divider from '../components/Divider'
import { DividerObjOne, DividerObjTwo, DividerObjThree } from '../components/Divider/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <Hero/>
            <Info {...InfoObjOne}/>
            <Showcase/>
            <Info {...InfoObjTwo}/>
            <Divider {...DividerObjTwo}/>
            <Control {...ControlObjOne}/>
            <Info {...InfoObjThree}/>
            <Divider {...DividerObjOne}/>
            <Control {...ControlObjTwo}/>
            <Info {...InfoObjFour}/>
            <Info {...InfoObjFive}/>
            <Info {...InfoObjSix}/>
            <Divider {...DividerObjThree}/>
            <Control {...ControlObjThree}/>
            <Footer />
        </>
    )
}

export default Home