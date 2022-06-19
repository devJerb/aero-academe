import styled from 'styled-components'

export const ControlContainer = styled.div`
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;

    @media screen and (max-width: 1000px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 1600px;
    }
`;

export const ControlWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: auto 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ControlCard = styled.div`
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    height: 400px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const ControlIcon = styled.img`
    border-radius: 10px;
    height: 220px;
    width: 270px;
    margin-bottom: 10px;
    z-index: 3;
`;

export const ControlH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ControlH2 = styled.h2`
    margin-top: 20px;
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ControlP = styled.p`
    font-size: 0.85rem;
    text-align: center;
`;