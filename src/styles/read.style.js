import styled from "styled-components";
import img from "../assets/home/back.png"

export const ConTainer = styled.div`
display: flex;
padding: 2% 5%;
flex-direction: column;

 
 
/* h1{
    color: #FFF;
}
p{
    color: #FFF;
} */
` 
export const ConCenter = styled.div`
display: flex;

`
export const ConTainefdr = styled.div`
display: flex;
background-image: url(${img});
background-position: center;
background-repeat:no-repeat;
background-size:100%;
`
export const MyPhotoWrap = styled.div`
display: flex;
/* justify-content: center;
*/
align-items: center;
flex-direction: column;
`
export const MyPhoto = styled.img`
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
/* border: 1px solid; */
width: 200px;
height: 260px;
background-color: transparent;
border-radius: 4px;
`

export const Contact = styled.div`
display: flex;
@media only screen and (max-width: 500px) {
    display: grid;
    padding-right: 20px;
}
@media only screen and (max-width: 1200px) {
    display: grid;
    
}
`
export const ContactLeft = styled.div`
display: flex;
flex:1;
 
 gap: 30px;
justify-content: center;
flex-direction: column;
@media only screen and (max-width: 500px) {
   padding-right: 20px;
     
}
`
export const ContactRight = styled.div`
display: flex;
flex:1;
justify-content: center;
@media only screen and (max-width: 500px) {
   padding-right: 20px;
     
}
@media only screen and (max-width: 500px) {
   padding-right: 20px;
     
}
`

export const ContactInput = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
 gap: 30px;
align-items: center;
`
export const CInput = styled.input`
width: 308px;
height: 40px;
flex-shrink: 0;
border-radius: 12px;
border: 1px solid var(--Border, #E1E1E1);
background: var(--Color-White, #FFF);
flex-direction: column;
padding: 10px;
`
export const InputBig = styled.input`
width: 685px;
height: 220px;

 
align-items: start;
display: flex;
flex-shrink: 0;
border-radius: 12px;
border: 1px solid var(--Border, #E1E1E1);
background: var(--Color-White, #FFF);
`
export const ContactDetail = styled.div`
 
flex-shrink: 0;
border-radius: 16px;
 
background: var(--White, #FFF);
padding: 20px;
gap: 30px;
display: grid;
`

export const Addres = styled.div`
display: flex;
 align-items: center;
 gap: 20px;
 border: 1px solid;
 border-radius: 10px;
 padding: 10px;
 h4{
    color: var(--Color-Primary, #050B20);
leading-trim: both;
text-edge: cap;
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 26px; /* 173.333% */
 }
 p{
    color: var(--Color-Primary, #050B20);
leading-trim: both;
text-edge: cap;
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 26px;
 }
`
 export const Icons = styled.div`
 display:flex;
 align-items: center;
 justify-content: space-around;
 cursor: pointer;
  
 `