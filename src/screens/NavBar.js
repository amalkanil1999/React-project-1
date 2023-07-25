import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [navOpen, setNavOpen] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1280) {
        setNavOpen(false);
      } else {
        setNavOpen(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const slide = {
    transform: navOpen ? "translateX(0)" : "translateX(-180%)",
  };
  return (
    <Wrapper>
      <Menu onClick={() => setNavOpen(!navOpen)}>
          <HamburgerButton
            navOpen={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </Menu>
      <NavigationBar style={slide}>
        <H1>
          <A>
            <Logoimage src={require("../Assets/Logo-Wallet.png")} alt="logo" />
          </A>
        </H1>
        <MainContainer>
          <Mainlist>
            <List>
              <SnavLink className={({isActive})=>(isActive ? "active" : "")} to="/">
                <Sidemenu>
                  <Menuimage
                    src={require("../Assets/Property 1=menu.svg").default}
                    alt="menu"
                  />
                </Sidemenu>
                <Para>Dashboard</Para>
              </SnavLink>
            </List>
            <List>
              <SnavLink className={({isActive})=>(isActive ? "active" : "")} to="mycards">
                <Sidemenu>
                  <Menuimage
                    src={
                      require("../Assets/Property 1=credit-card.svg").default
                    }
                    alt="credit-card"
                  />
                </Sidemenu>
                <Para>My cards</Para>
              </SnavLink>
            </List>
            <List>
              <SnavLink className={({isActive})=> (isActive ? "active" : "")} to="savings">
                <Sidemenu>
                  <Menuimage
                    src={require("../Assets/Property 1=lock.svg").default}
                    alt="lock"
                  />
                </Sidemenu>
                <Para>Saving</Para>
              </SnavLink>
            </List>
            <List>
              <SnavLink className={({isActive})=>(isActive ? "active" : "")} to="transaction">
                <Sidemenu>
                  <Menuimage
                    src={
                      require("../Assets/Property 1=transaction.svg").default
                    }
                    alt="transaction"
                  />
                </Sidemenu>
                <Para>Transaction</Para>
              </SnavLink>
            </List>
            <List>
              <SnavLink className={({isActive})=>(isActive ? "active" : "")} to="settings">
                <Sidemenu>
                  <Menuimage
                    src={require("../Assets/Property 1=gear.svg").default}
                    alt="settings"
                  />
                </Sidemenu>
                <Para>Settings</Para>
              </SnavLink>
            </List>
          </Mainlist>
        </MainContainer>
        <Bottomcontainer>
          <Listcontainer>
            <Portrait src={require("../Assets/Rectangle 20687.jpg")} />
          </Listcontainer>
          <Listcontainer>Jennifer Connely</Listcontainer>
          <Listcontainer>
            <Dots src={require("../Assets/Property 1=dot.svg").default} />
          </Listcontainer>
        </Bottomcontainer>
      </NavigationBar>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  height: 100vh;
  background: #f6f6f6;
  width: 15%;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 5%;
  }
`;
const Menu = styled.div`
  padding: 15px;
  cursor: pointer;
  z-index: 50;
  position: absolute;
  
`;
const HamburgerButton = styled.div`
  display: none;

  @media screen and (max-width: 1280px) {
    display: block;
    width: 30px;
    height: 22.5px;
    padding: 0;
    position: relative;
    cursor: pointer;

    span {
      position: absolute;
      height: 3px;
      border-radius: 5px;
      width: 100%;
      background-color: #000;
      transition: transform 0.3s ease-out;
      transform-origin: center;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.1s ease-out;
        left: 0;
        opacity: 1;
      }

      &:nth-child(3) {
        left: 0;
        bottom: 0;
      }
    }

    ${({ navOpen }) =>
      navOpen &&
      `
      span:nth-child(1) {
        transform: translateY(10px) rotate(-45deg);
      }
      span:nth-child(2) {
        transform: translate(100%);
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-9px) rotate(45deg);
      }
    `}
  }
`;

const NavigationBar = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-bottom:30px;
  background: #f6f6f6;
  @media screen and (max-width: 1280px) {
    width: 280px;
  }
`;

const H1 = styled.h1``;

const A = styled.a`
  display: block;
  width: 200px;
`;

const Logoimage = styled.img`
  display: block;
  width: 100%;
`;
const SnavLink = styled(NavLink)`
&.active{
  border-left: 4px solid #000;
  color:#000;
 }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  padding-left:5%;
 
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const Mainlist = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
`;

const List = styled.li``;

const Sidemenu = styled.div``;

const Menuimage = styled.img`
  display: block;
  width: 100%;
`;

const Bottomcontainer = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #000;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`;

const Listcontainer = styled.li`
  width: 50px;
  margin-top: 30px;
`;

const Portrait = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;

const Dots = styled.img`
  display: block;
  width: 50%;
`;

const Para = styled.span`
  margin-left: 15px;
  font-size: 20px;
  font-family: "IBMPlexSans-Medium";
`;

export default NavBar;
