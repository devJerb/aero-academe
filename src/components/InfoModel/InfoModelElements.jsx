import styled from 'styled-components'

export const InfoModelContainer = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 350px;
    }
`;

export const InfoModelBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -999;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, #8f8f8f33 0%,rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, #00000033 0%, transparent 100%);
        z-index: 2;
    }
`;

export const InfoModelVideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    z-index: -999;
`;

export const InvertedInfoModelVideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    z-index: -999;
    transform: scaleX(-1);
`;

export const InfoModelWrapper = styled.section`
    // fill with css styles
`;

export const InfoModelIcon = styled.img`
    width: 1000px;
    height: 600px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        height: 200px;
        width: 320px;
    }
`;

export const InfoModelRightArrow = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;
    font-size: 3rem;
    color: #ffffff;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    
    @media screen and (max-width: 768px) {
        margin-top: -15px;
    }

    &&:hover {
        color: #49DFEB;
    }
`;

export const InfoModelLeftArrow = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 3rem;
    color: #ffffff;
    z-index: 2;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        margin-top: -15px;
    }

    &&:hover {
        color: #49DFEB;
    }
`;

export const InvertedInfoModelRightArrow = styled.div`
    position: absolute;
    top: 80%;
    font-size: 3rem;
    color: #ffffff;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    transform: rotate(90deg);
    
    @media screen and (max-width: 768px) {
        margin-top: -15px;
    }

    &&:hover {
        color: #49DFEB;
    }
`;

export const InvertedInfoModelLeftArrow = styled.div`
    position: absolute;
    top: 10%;
    font-size: 3rem;
    color: #ffffff;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    transform: rotate(90deg);

    @media screen and (max-width: 768px) {
        margin-top: -15px;
    }

    &&:hover {
        color: #49DFEB;
    }
`;

export const InfoModelSlide = styled.div`
    opacity: 0;
    transition-duration: 1s ease;
`;

export const InfoModelSlideActive = styled.div`
    opacity: 0;
    transition-duration: 1s ;
    transform: scale(0.1s);
`;

