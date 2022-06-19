import React, { useState } from 'react'
import { SliderInfoModelDataOne, SliderInfoModelDataTwo, SliderInfoModelDataThree } from './Data'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'
import { InfoModelContainer, InfoModelIcon, InfoModelWrapper, InfoModelVideoBackground, InfoModelBackground, InfoModelSlide, InfoModelSlideActive, InfoModelRightArrow, InfoModelLeftArrow, InvertedInfoModelRightArrow, InvertedInfoModelLeftArrow, InvertedInfoModelVideoBackground } from './InfoModelElements'
import Info from '../Info'
import { InfoObjSeven, InfoObjEight, InfoObjNine } from '../Info/Data'
import Video from '../../videos/model/video.mp4'
import Video1 from '../../videos/model/video1.mp4'
import Video2 from '../../videos/model/video2.mp4'


const InfoModel = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <>
            <Info {...InfoObjEight}/>
            <InfoModelContainer>
                <InfoModelBackground>
                        <InfoModelVideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
                </InfoModelBackground>
                <InfoModelLeftArrow><FaAngleDoubleLeft onClick={prevSlide}/></InfoModelLeftArrow>
                <InfoModelRightArrow><FaAngleDoubleRight onClick={nextSlide}/></InfoModelRightArrow>
                {SliderInfoModelDataOne.map((slide, index) => {
                    return (
                        <InfoModelWrapper className={index === current ? <InfoModelSlideActive/> : <InfoModelSlide/>}>
                            {index === current && (<InfoModelIcon src={slide.img} key={index}/>)}
                        </InfoModelWrapper>
                    )
                })}
            </InfoModelContainer>
            <Info {...InfoObjSeven}/>
            <InfoModelContainer>
                <InfoModelBackground>
                        <InvertedInfoModelVideoBackground autoPlay loop muted src={Video1} type='video/mp4'/>
                </InfoModelBackground>
                <InvertedInfoModelLeftArrow><FaAngleDoubleLeft onClick={prevSlide}/></InvertedInfoModelLeftArrow>
                <InvertedInfoModelRightArrow><FaAngleDoubleRight onClick={nextSlide}/></InvertedInfoModelRightArrow>
                {SliderInfoModelDataTwo.map((slide1, index1) => {
                    return (
                        <InfoModelWrapper className={index1 === current ? <InfoModelSlideActive/> : <InfoModelSlide/>}>
                            {index1 === current && (<InfoModelIcon src={slide1.img} key={index1}/>)}
                        </InfoModelWrapper>
                    )
                })}
            </InfoModelContainer>
            <Info {...InfoObjNine}/>
            <InfoModelContainer>
                <InfoModelBackground>
                        <InfoModelVideoBackground autoPlay loop muted src={Video2} type='video/mp4'/>
                </InfoModelBackground>
                <InfoModelLeftArrow><FaAngleDoubleLeft onClick={prevSlide}/></InfoModelLeftArrow>
                <InfoModelRightArrow><FaAngleDoubleRight onClick={nextSlide}/></InfoModelRightArrow>
                {SliderInfoModelDataThree.map((slide2, index2) => {
                    return (
                        <InfoModelWrapper className={index2 === current ? <InfoModelSlideActive/> : <InfoModelSlide/>}>
                            {index2 === current && (<InfoModelIcon src={slide2.img} key={index2}/>)}
                        </InfoModelWrapper>
                    )
                })}
            </InfoModelContainer>      
        </>
    )
}

export default InfoModel