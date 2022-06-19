import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, SubtitleList, SubtitleListItem } from './InfoElements'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const Info = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, description1, description2, description3, img, alt, titleDescription}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>
                                <SubtitleList>
                                    <SubtitleListItem>
                                        {description}
                                    </SubtitleListItem>
                                    <SubtitleListItem>
                                        {description1}
                                    </SubtitleListItem>
                                    <SubtitleListItem>
                                        {description2}
                                    </SubtitleListItem>
                                    <SubtitleListItem>
                                        {description3}
                                    </SubtitleListItem>
                                </SubtitleList>
                            </Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                                <ImgWrap>
                                    <TransformComponent>
                                        <Img src={img} alt={alt}/>  
                                    </TransformComponent>
                                </ImgWrap>
                            </TransformWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info