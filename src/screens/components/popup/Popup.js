import React from 'react'
import { styled } from 'styled-components';

function Popup(props) {
  return (props.trigger) ? (
    <>
      <PopupContainer>
        <Popupdiv>
            <H15>Walets</H15>
          <Waletdiv>
          <Squares>
                <Imagecontainer>
                  <Images
                    src={require("../../../Assets/Property 1=sun 1.svg").default}
                    alt="sun"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
              </Squares>
              <Bsquares>
                <Imagecontainer>
                  <Images
                    src={require("../../../Assets/Property 1=fire.svg").default}
                    alt="fire"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
              </Bsquares>
              <Squares>
                <Imagecontainer>
                  <Images
                    src={require("../../../Assets/Property 1=sun 1.svg").default}
                    alt="sun"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
              </Squares>
            <Vsquares>
                <Imagecontainer>
                  <Images
                    src={require("../../../Assets/Property 1=console.svg").default}
                    alt="console"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
            </Vsquares>
            <Closebutton onClick={()=>props.setTrigger(false)}>Close</Closebutton>
              <Bsquares>
                <Imagecontainer>
                  <Images
                    src={require("../../../Assets/Property 1=fire.svg").default}
                    alt="fire"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
            </Bsquares>
            
          </Waletdiv>
          
        </Popupdiv>
      </PopupContainer>
      {props.children}
    </>
    
  ) : "";
}
const PopupContainer = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
width:100;
height:100vh;
background-color:rgba(0,0,0,0.2);
display:flex;
align-items:center;
justify-content:center;
`;
const Popupdiv = styled.div`
background-color:teal;
padding:10px;
border-radius:6px;
`;
const H15 = styled.h4`
font-size:24px;
color:#fff;
max-width:100px;
margin:0 auto;
text-align:center;`;
const Waletdiv = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;`;
const Closebutton = styled.button`
font-size:20px;
border:1px solid #000;
height:50px;
width:90px;
margin:auto auto;
border-radius:6px;`;
const Squares = styled.div`
  background-color: #fec0a7;
  width: 31%;
  border-radius: 6px;
  padding: 20px;
  margin:10px;
`;
const Bsquares = styled.div`
  width: 31%;
  border-radius: 6px;
  background-color: #98bde5;
  padding: 20px;
  margin:10px;
`;
const Vsquares = styled.div`
  width: 31%;
  border-radius: 6px;
  background-color: rgb(152, 219, 229);
  padding: 20px;
  margin:10px;
`;
const Small = styled.small`
  font-size: 18px;
  font-family: "IBMPlexSans-Medium";
`;
const Imagecontainer = styled.div`
  width: 45px;
  margin-bottom: 30px;
`;
const Images = styled.img`
  display: block;
  width: 100%;
`;
const H6 = styled.h3`
  font-size: 28px;
  font-family: "IBMPlexSans-Medium";
`;

export default Popup