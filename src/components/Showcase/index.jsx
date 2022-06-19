import React from 'react'
import Video from '../../videos/video2.mp4'
import { ShowcaseContainer, ShowcaseBackground, VideoBackground, ShowcaseContent, ShowcaseH1, ShowcaseP, ShowcaseBtn, ShowcaseBtnLink } from './ShowcaseElements'

const Showcase = () => {
    return (
        <ShowcaseContainer id="about">
            <ShowcaseBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </ShowcaseBackground>
            <ShowcaseContent>
                <ShowcaseH1>Aeronautical Enginuity</ShowcaseH1>
                    <ShowcaseP>
                    Simulation of an aircraft object integrated on the website
                    </ShowcaseP>
                    <ShowcaseBtn>
                        <ShowcaseBtnLink to="/model">Open Simulation</ShowcaseBtnLink>
                    </ShowcaseBtn>
            </ShowcaseContent>
        </ShowcaseContainer>
    )
}

export default Showcase