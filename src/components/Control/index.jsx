import React from 'react'
import { ControlContainer, ControlH1, ControlCard, ControlIcon, ControlWrapper, ControlH2, ControlP } from './ControlElements'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const Control = ({ headingTitle, title, title1, title2, description, description1, description2, img, img1, img2 }) => {
    return (
        <ControlContainer id="control-system">
            <ControlH1>{headingTitle}</ControlH1>
            <ControlWrapper>
                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                <ControlCard>
                    <TransformComponent>
                        <ControlIcon src={img}/>
                    </TransformComponent>
                    <ControlH2>{title}</ControlH2>
                    <ControlP>{description}</ControlP>
                </ControlCard>
                </TransformWrapper>
                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                    <ControlCard>
                    <TransformComponent>
                        <ControlIcon src={img1}/>
                    </TransformComponent>
                        <ControlH2>{title1}</ControlH2>
                        <ControlP>{description1}</ControlP>
                    </ControlCard>
                </TransformWrapper>
                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                    <ControlCard>
                    <TransformComponent>
                        <ControlIcon src={img2}/>
                    </TransformComponent>
                        <ControlH2>{title2}</ControlH2>
                        <ControlP>{description2}</ControlP>
                    </ControlCard>
                </TransformWrapper>
            </ControlWrapper>
        </ControlContainer>
    )
}

export default Control