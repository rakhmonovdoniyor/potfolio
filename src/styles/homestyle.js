import styled from "styled-components";
import img3 from "../assets/bof=dy/image.png"

export const Contain = styled.div`
display: flex;
flex-direction: column;
padding: 2% 5%;
`
export const WrapFlex = styled.div`
display: flex;
flex:1;
@media only screen and (max-width: 600px){
    display: grid;
    align-items: center;
    flex-direction: column;
}
`
export const WrapFlexRight = styled.div`
display: flex;
flex:1;
 
align-items: center;
justify-content: end;
gap: 100px;
 
`
export const WrapFlexLeft = styled.div`
display: flex;
flex:1;
justify-content: space-evenly;
 
`
export const BtnWrap = styled.button`
display: inline-flex;
padding: 20px 26px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 12px;
 
background: transparent;
cursor: pointer;
 &:hover{
    color: white;
    background: var(--Color-Secondary, #405FF2);
}
//
 
`

export const SecondBody = styled.div`
display: flex;
padding-top: 100px;
gap: 50px;
@media only screen and (max-width: 600px){
    display: grid;

}
`

export const SecondBodyLeft = styled.div`
display: flex;
flex: 1;
 
flex-direction: column;

justify-content: center;
h1{
    color: white;
}
p{
    color: white;
}
 
`

export const SecondBodyRight = styled.div`
display: flex;
flex: 1;
 
`

export const Img1 = styled.img`
display: flex;
width: 100%;
height: 500px;
background-size: cover;
background-color: transparent;
`
export const TextBody = styled.p`
 display: flex;
 flex-direction: column;
 h1{
    color: white;
 }
`
export const TextP = styled.p`
 border-left: 5px solid blue;
 border-radius: 5px;
padding: 10px;
color: white;
`
export const BoxWrap = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
gap:50px;
`

export const Box = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 width: 300px;
 height: 400px;
 background-color: #FFF;
 
 border-radius: 3px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const Img2 = styled.img`
 width: 280px;
`
export const Skills = styled.div`
width: 280px;
height: 400px;
display: flex;
 cursor: pointer;
justify-content: center;
flex-direction: column;
border-radius: 5px;
padding: 10px;
 gap: 0;
 box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
 &:hover{
background-color: #E0FFFF;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
transform: scale(1.01);
}
`
export const SkillsWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;
 /* align-items: center;
justify-content:center; */

@media only screen and (max-width: 500px) {
    display: grid;
grid-template-columns: repeat(1, 1fr);
}
@media only screen and (max-width: 900px) {
    display: flex;
grid-template-columns: repeat(2, 1fr);
}
@media only screen and (max-width: 1200px) {
    display: grid;
grid-template-columns: repeat(3, 1fr);
}
 
`

 

export const GradientButton = styled.button`
  background: linear-gradient(45deg, #f3ec78, #af4261);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

 
