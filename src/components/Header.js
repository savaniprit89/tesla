import React ,{useState}from "react";
import styled from "styled-components";
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux"
function Header(){
    const[burgerStatus,setBurgerStatus]=useState(false);
    const cars =useSelector(selectCars)
    return(
        <Container>
        <a>
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
        {cars &&cars.map((car,index)=>(
            <a key={index} href="#">{car}</a>
        ))}
            
           
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setBurgerStatus(true)} width="28" height="57" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
        <CustomMenu />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setBurgerStatus(false)} width="28" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
</CloseWrapper>
{cars && cars.map((car,index)=>(
            <li key={index}><a href="#">{car}</a></li> 
        ))}
            <li><a href="#">Existing Inventory</a>   </li>
            <li><a href="#">Used Inventory</a>   </li>
            <li><a href="#">Trade-in</a>   </li>
            <li><a href="#">Cybertruck</a>   </li>
            <li><a href="#">Roadaster</a>   </li>
            <li><a href="#">Existing Inventory</a>   </li>
            

        </BurgerNav>
        
        </Container>
    )
}

export default Header

const Container =styled.div`
z-index:1;
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;

`

const Menu =styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu=styled.div`

display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px
    
}
`

const CustomMenu= styled.div`
cursor:pointer;
`

const BurgerNav=styled.div`
position:fixed;
top: 0;
bottom:0;
right :0;

background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props=> props.show ? 'translateX(0)' :'translateX(100%)'};
transition:transform 0.2s ;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
        font-weight:600;
    }
}
`

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end
`
//react reveal is module for animation library and fade is used here