import styled from "styled-components";
import bannerImg from '../../assets/images/background-hogwarts.svg'
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";


export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 480px;
    padding-top: 16px;
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    &::after{
        position: absolute;
        background-color: #000;
        opacity: 0.56;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
    }

    ${TagContainer}{
        margin-right: 8px;
    }

    .container {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
`

export const Infos = styled.div`
    padding: 16px;
    background-color: ${cores.preta};
    max-width: 300px;
    font-weight: bold;
    
    h2{
        font-size: 31px;
    }

    p{
        font-size: 18px;
        margin: 16px 0;

        span{
            text-decoration: line-through;
        }
    }
`
