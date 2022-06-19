import React from 'react'
import { DividerContainer, DividerBackground, VideoBackground, DividerContent, DividerH1, DividerP } from './DividerElements'

const Divider = ({ video, title, description, btn }) => {
    return (
        <DividerContainer id="about">
            <DividerBackground>
                <VideoBackground autoPlay loop muted src={video} type='video/mp4'/>
            </DividerBackground>
            <DividerContent>
                <DividerH1>{title}</DividerH1>
                    <DividerP>
                    {description}
                    </DividerP>
            </DividerContent>
        </DividerContainer>
    )
}

export default Divider