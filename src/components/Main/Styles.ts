import styled from "styled-components";

interface Props {
    bgcolor: string
}

export const Container = styled.div`
    display: flex;
    > img {
        position: absolute;
        max-width: 400px;
        right: 200px;
    }

`;

export const Footer = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    
    > div {
        
         > img {
            transition: 0.5s;
            height: 150px;
            padding: 20px;
            cursor: pointer;
            &:hover{
                transform: translateY(-15px);
            }
         }
    }
`;

export const Circle = styled.div<Props>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${props => props.bgcolor};

    clip-path: circle(600px at right 800px);
`;

export const TextCentral = styled.div<Props>`

    padding-left: 6%;
    padding-top: 3%;
    
    >h1{
        font-size: 80px;
        font-weight: 400;
        max-width: 800px;
        > strong {
            color: ${props => props.bgcolor};
            font-weight: 900;
        }
    }

    > p {
        font-size: 20px;
        font-weight: 500;
        max-width: 800px;
    }
        
`;

export const Button = styled.button<Props>`
    margin-top: 20px;
    background-color: ${props => props.bgcolor};
    color: white;
    border: none;
    border-radius: 40px;
    font-size: 20px;
    font-weight: 600;
    width: 200px;
    height: 50px;
    cursor: pointer;
`;