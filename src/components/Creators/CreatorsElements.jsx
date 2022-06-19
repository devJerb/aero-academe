import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CreatorsContainer = styled.div`
    height: 969px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgb(1, 113, 147) 0%,
        #03304258 100%
    );

    @media screen and (max-width: 1500px) {
        height: 959px;
    }

    @media screen and (max-width: 1000px) {
        height: 1400px;
    }

    @media screen and (max-width: 768px) {
        height: 2200px;
    }
`;

export const CreatorsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    grid-gap: 16px;
    margin-right: 40%;

    @media screen and (max-width: 1920px) {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
        margin-right: 17%;
    }

    @media screen and (max-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
        margin-right: 12%;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        display: grid;
        margin-right: 15%;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const CreatorsCard = styled.div`
    background: #000;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 500px;
    height: 400px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const CreatorsIcon = styled.img`
    height: 290px;
    width: 270px;
    margin-bottom: 10px;
    z-index: 3;
`;

export const CreatorsH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CreatorsH2 = styled.h2`
    margin-top: 20px;
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;
`;

export const Icon = styled(Link)`
    position: absolute;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 19%;
    margin-right: 80%;
    bottom: 55%;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        display: none;
    }

    @media screen and (max-width: 1500px) {
        display: none;
    }
`;