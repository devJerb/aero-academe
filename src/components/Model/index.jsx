import React from 'react'
import Video from '../../videos/video5.mp4'
import { ModelContainer, ModelBackground, VideoBackground, ModelContent, ModelH1, ModelP } from './ModelElements'

const Model = () => {
    return (
        <ModelContainer id="home">
            <ModelBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </ModelBackground>
            <ModelContent>
                <ModelH1>Aircraft Simulation</ModelH1>
                <ModelP>
                    Defining aircraft model states and parts
                </ModelP>
            </ModelContent>
        </ModelContainer>
    )
}

export default Model