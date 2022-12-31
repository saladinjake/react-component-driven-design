import styled from "styled-components"

const StyledDate=styled.div`
.DatePickerUI {
    float: left;
    position: relative;
}
.DatePickerUI * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently */  
}

.mdp-input{
    float: left;
    width: 190px;
    height: 55px;
    overflow: hidden;
    border-radius: 20px;
    
}
.mdp-input input:focus{
    outline: none;
}
.mdp-input input{
    width: 145%;
    
    border: none;
    padding-right: 10px;
    height: 55px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    cursor: pointer;
    margin-top:5px;
    border:1px solid #fafafa;
    -moz-box-shadow: 0 0 3px  0px 2px 2px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
border: 2px solid #fafafa;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

}

.mdp-container {
    float: left;
    position: absolute;
    left:0;
    top: 40px;
    width: 380px;
    min-height: 490px;
    background: #fff;
    box-shadow: 10px 10px 40px rgba(0,0,0,0.2);
    border-radius: 20px;
    overflow: hidden;
    padding: 25px 30px;
    z-index:9999;
}
.mdpc-head{
    float: left;
    width: 100%;
    height: 53px;
}
.mdpc-body{
    float: left;
    width: 100%;
    margin-top: 20px;
}

/**
 * Controls
 */

.mdpch-button{
    float: left;
    width: 45px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
}
.mdpchb-inner:hover > span{
    border-color: #555!important;
} 
.mdpchb-inner:hover{ 
    cursor: pointer;
    background: #eee;
}
.mdpchb-inner {
    float: left;
    height: 35px;
    width: 35px;
    background: #f4f4f4;
    border-radius: 100%;
    line-height: 35px;
    text-align: center;
    position: absolute;
    top:50%;
    left: 50%;
    margin-left: -17px;
    margin-top: -17px;
}

.mdpchbi-right-arrows:after,
.mdpchbi-left-arrows:after,
.mdpchbi-right-arrow,
.mdpchbi-right-arrows,
.mdpchbi-left-arrow,
.mdpchbi-left-arrows{
    display: block;
    float: left;
    width: 6px;
    height: 6px;
    border-left: 2px solid #888;
    border-bottom: 2px solid #888;
    position: absolute;
}
.mdpchbi-right-arrow,
.mdpchbi-right-arrows,
.mdpchbi-left-arrow,
.mdpchbi-left-arrows{
    transform: rotate(45deg);
    left: 50%;
    top:50%;
    margin-left: -2px;
    margin-top: -4px;
}
.mdpchbi-right-arrows,
.mdpchbi-right-arrow {
    transform: rotate(225deg);
    margin-left: -4px;
}
.mdpchbi-right-arrows:after,
.mdpchbi-left-arrows:after{
    content: '';
}

.mdpchbi-left-arrows{
    margin-left: -5px;
}
.mdpchbi-right-arrows{
    margin-left: -2px;
}
.mdpchbi-right-arrows:after,
.mdpchbi-left-arrows:after{
    left: 3px;
    top: -5px
}
 

.mdpch-container{
    float: left;
    width: 120px;
    height: 100%;
}
.mdpchc-year{
    float: left;
    width: 100%;
    height: 30px;
    font-size: 27px;
    color: #666;
    font-weight: 200px;
    text-align: center;
}
.mdpchc-month{
    float: left;
    width: 100%;
    height: 15px;
    font-size: 13px;
    color: #666;
    font-weight: 200px;
    text-align: center;
}

/**
 *  Calendar
 */
.cc-month,
.cc-head,
.cch-name, 
.cc-body,
.cdc-day span,
.cdc-day,
.c-day-container,
.c-container{
    position: relative;
    display: block;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.c-container{ 
    width: 100%;
    height: 100%;
}

.cc-month{ 
    height: 30px;
    width: 100%;
    font-family: Roboto;
    font-size: 16px;
    line-height: 30px;
    color: #666;
}
.cc-head{ 
    height: 30px;
    width: 100%;
    margin-top: 10px;
}
.cch-name{ 
    width: 14.285%;
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    color: #666;
    font-size: 9px;
    text-align: center;
}
.cc-body{ 
    height: 270px;
    width: 100%;
}
.c-day-container{ 
    width: 14.285%;
    height: 16.6666%;
}
.cdc-day{
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 300;
    color: #444;
    text-align: center;
}
.cdc-day span{ 
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 300;
    color: #444;
}

.cdc-day span:hover{
    cursor: pointer;
    background: #eee;
} 
.cdc-day span{
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    left: 50%;
    top: 50%;
    font-weight: 400;
    border-radius: 100%;
    line-height: 30px;
}
.c-day-container.disabled{
    pointer-events: none;
}

.c-day-container.disabled .cdc-day span{
    color: #ddd;
}
.c-day-container.disabled .cdc-day span{
    background: #fff!important;
}
.c-day-container.highlight .cdc-day span{
    background: #efdbca;
}
.c-day-container.highlight-green .cdc-day span{
    background: #eaeaea;
    color:#000;
}

.padding-section{
  margin-top:21px;
  
}

.custom-field {
  position: relative;
  font-size: 14px;
  border-top: 20px solid transparent;
  margin-bottom: 5px;
  display: inline-block;
  --field-padding: 12px;
}

.custom-field input {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: var(--field-padding);
  border-radius: 3px;
  width: 310px;
  outline: none;
  font-size: 14px;
}

.custom-field .placeholder {
  position: absolute;
  left: var(--field-padding);
  width: calc(100% - (var(--field-padding) * 2));
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 22px;
  line-height: 100%;
  transform: translateY(-50%);
  color: #aaa;
  transition: 
    top 0.3s ease,
    color 0.3s ease,
    font-size 0.3s ease;
}

.custom-field input.dirty + .placeholder,
.custom-field input:focus + .placeholder,
.custom-field input:not(:placeholder-shown) + .placeholder {
  top: -10px;
  font-size: 10px;
  color: #222;
}

.custom-field .error-message {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 12px;
  background: #d30909;
  color: #fff;
  height: 24px;
}

.custom-field .error-message:empty {
  opacity: 0;
}

/* ONE */
.custom-field.one input {
  background: none;
  border: 2px solid #ddd;
  transition: border-color 0.3s ease;
}

.custom-field.one input + .placeholder {
  left: 8px;
  padding: 0 5px;
}

.custom-field.one input.dirty,
.custom-field.one input:not(:placeholder-shown),
.custom-field.one input:focus {
  border-color: #222;
  transition-delay: 0.1s
}

.custom-field.one input.dirty + .placeholder,
.custom-field.one input:not(:placeholder-shown) + .placeholder,
.custom-field.one input:focus + .placeholder {
  top: 0;
  font-size: 10px;
  color: #222;
  background: #fff;
  width: auto
}

`
export default StyledDate