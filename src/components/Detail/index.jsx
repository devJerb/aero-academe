import React from 'react'
import { DetailContainer, DetailH1, DetailWrapper, DetailCard, DetailIcon, DetailH2, DetailP } from './DetailElements'

const Detail = ({ headingTitle, title, title1, title2, title3, description, description1, description2, description3, img, img1, img2, img3 }) => {
    return (
        <DetailContainer id="Detail-system">
            <DetailH1>{headingTitle}</DetailH1>
            <DetailWrapper>
                <DetailCard>
                    <DetailIcon src={img}/>
                    <DetailH2>{title}</DetailH2>
                    <DetailP>{description}</DetailP>
                </DetailCard>
                <DetailCard>
                    <DetailIcon  src={img1}/>
                    <DetailH2>{title1}</DetailH2>
                    <DetailP>{description1}</DetailP>
                </DetailCard>
                <DetailCard>
                    <DetailIcon src={img2}/>
                    <DetailH2>{title2}</DetailH2>
                    <DetailP>{description2}</DetailP>
                </DetailCard>
                <DetailCard>
                    <DetailIcon src={img3}/>
                    <DetailH2>{title3}</DetailH2>
                    <DetailP>{description3}</DetailP>
                </DetailCard>
            </DetailWrapper>
        </DetailContainer>
    )
}

export default Detail