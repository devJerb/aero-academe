import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Model from '../components/Model'
import NavBarModel from '../components/NavBarModel'
import InfoModel from '../components/InfoModel'
import { SliderInfoModelDataOne} from '../components/InfoModel/Data'
import Footer from '../components/Footer'

const Models = () => {
    return (
        <>
            <ScrollToTop/>
            <NavBarModel/>
            <Model/>
            <InfoModel slides={SliderInfoModelDataOne}/>
            <Footer/>
        </>
    )
}

export default Models