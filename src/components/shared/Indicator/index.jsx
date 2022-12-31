import styled from "styled-components"
import { useEffect  } from "react";
const IndicatorComponent=styled.div`
div.online-indicator , div.offline-indicator, div.dormant-indicator, div.inactive-indicator {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-right: 10px;
  
  background-color: #0fcc45;
  border-radius: 50%;
  
  position: relative;
}

div.offline-indicator{
  background-color:red;
}
div.dormant-indicator{
  background-color:rgba(150, 150, 150, 0.2);
}
div.inactive-indicator{
  background-color:red;
}
span.blink, span.blink-deactivated {
  display: block;
  width: 6px;
  height: 6px;
  
  background-color: #0fcc45;
  opacity: 0.7;
  border-radius: 50%;
  
  animation: blink 1s linear infinite;
}

span.blink-deactivated {
  background:red;
}

span.blink-dormant{
    background:rgba(150, 150, 150, 0.2);
}

span.blink-inactive{
    background:yellow;
}

h2.online-text {

  display: inline;
  font-weight: 200;
 color:#777;
  font-size:14px;
  position: relative;
  cursor: pointer;
}
/*Animations*/

@keyframes blink {
  100% { transform: scale(2, 2); 
          opacity: 0;
        }
}
`;

 const Indicator = ({
     title, 
     indicatorClass="online-indicator", 
     blinkClass="blink", 
     onClicker=null
}) =>{  
   
  return(
    <IndicatorComponent>
        <div className={indicatorClass}>
            <span className={blinkClass}></span>
        </div>
        {onClicker ? <h2 onClick={onClicker} className="online-text">{title}</h2>: <h2  className="online-text">{title}</h2>}
    </IndicatorComponent>

  )
}

export default Indicator

