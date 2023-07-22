import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Wrapper>
      <NavigationBar>
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
  max-width: 1280px;
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom:30px;
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
  // margin-left:10%;
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
