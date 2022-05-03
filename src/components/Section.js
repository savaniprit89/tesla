

import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"
function Section(props){
    return(
        <Wrap bgimage={props.backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
       {props.leftBtnText}
            </LeftButton>
          {  props.rightBtnText && <RightButton>
        {props.rightBtnText}
            </RightButton>
          }{/* //if right button text exists then only show right btn that code in line after end of leftbuttom  */}
        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap =styled.div`

    width:100vw;
    height:100vh;
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
    background-image:url('./images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;//vertical allignment   every single item in wrap will be evenly space horizontal
    align-items:center;//horizontal allignment
    background-image:${props => `url("/images/${props.bgimage}") ` }
`

const ItemText=styled.div`
padding-top:20vh;
text-align:center;
`

const ButtonGroup=styled.div`
display:flex;
margin-button:30px;
@media (max-width:768px){
    flex-direction:column;
}
`

const LeftButton =styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px

`

const RightButton=styled(LeftButton)`
background:white;
opacity:.65;
color:black
`
//using leftbuttton as reference


const DownArrow =styled.img`
margin:top:20px;
height:40px;
animation: animateDown infinte 1.5s;
overflow-x:hidden

`

const Buttons =styled.div`


`