import styled from "styled-components";
import { useNavigate } from "react-router-dom"

interface IPrimary {
    primary: boolean| null;
 }

const BackArrow = ({primary}:IPrimary) =>{
    const navigate = useNavigate();
    const GoBackStyledComponent =styled("div")<{primary: boolean}>`
    .go-back {
        color: ${props => props.primary ? "#fff" : "#40196D"};
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        padding-left: 15px;
        position: relative;
    }
    .go-back::before,
    .go-back::after {
        content: "";
        display: block;
        left: 0px;
        position: absolute;
        top: 50%;
        transition: left 0.1s;
    }
    .go-back::before {
        border-color: ${props => props.primary ? "#fff" : "#40196D"};
        border-style: solid;
        border-width: 0 0 2px 2px;
        height: 6px;
        margin-top: -3px;
        width: 6px;

        transform: rotate( 45deg );
        -webkit-transform: rotate( 45deg );
    }
    .go-back::after {
        background: ${props => props.primary ? "#fff" : "#40196D"};
        height: 2px;
        width: 11px;
    }
    .go-back:hover::before,
    .go-back:hover::after {
        left: -3px;
    }
`;
    return <GoBackStyledComponent  onClick={()=> navigate(-1)} primary={primary}/>
}



export default BackArrow

