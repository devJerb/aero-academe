import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    
    // Aircraft Flight Control System -> Title
    return (
        <HeroContainer id="home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Aircraft Flight Control System</HeroH1>
                <HeroP>
                    Universal classification of systems and sub systems of an aircraft
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} spy={true} offset={-80} exact="true" >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero