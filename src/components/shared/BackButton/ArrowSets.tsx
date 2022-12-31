import styled from "styled-components";

const ArrowSets = styled.span`

 .baseBg{
   border:1px solid #fff;
   background:#fff;
   height:30px;
   width:50px;
   margin-right:15px;
   border-radius:20px;
   padding: 10px;
   cursor:pointer;
 }
  


  .go-back {
    color:#000;
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
        left: 5px;
        position: absolute;
        top: 50%;
        transition: left 0.1s;
    }
    .go-back::before {
        border-color: #000;
        border-style: solid;
        border-width: 0 0 2px 2px;
        height: 6px;
        margin-top: -9px;
        width: 6px;
        transform: rotate( 45deg );
        -webkit-transform: rotate( 45deg );
    }


    .go-back::after {
        background: #000;
        height: 2px;
        width: 17px;
        position:absolute;
        left:7px;
        top:3px;
    }
    
   
`;


export default ArrowSets