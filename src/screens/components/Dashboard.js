import { useState } from "react";
import React from "react";
import { styled } from "styled-components";
import Popup from "./popup/Popup";

function Dashboard(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectchange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };
  const [openPopup, setopenPopup] = useState(false);
  return (
    <Main>
      <Top>
        <H1>Dashboard</H1>
        <Inputsearch>
          <Searchimage
            src={require("../../Assets/Property 1=Food-Site.svg").default}
            alt="search"
          />
          <Maininput placeholder="Search documents,keywords etc."></Maininput>
        </Inputsearch>
      </Top>
      <Middle>
        <Leftcontainer>
          <UP>
            <Amountlist>
              <Span>Available amount</Span>
              <H2>$6,550</H2>
            </Amountlist>
            <Amountlist>
              <Span>Card balance</Span>
              <H2>$4,208</H2>
            </Amountlist>
            <Amountlist>
              <Span>Credit limit</Span>
              <H2>$20,000</H2>
            </Amountlist>
          </UP>
          <Down>
            <Topportion>
              <H4>Savings</H4>
              <Snavlink onClick={()=>setopenPopup(true)}>Total 5 walets</Snavlink>
            </Topportion>
            <Bottomportion>
              <Squares>
                <Imagecontainer>
                  <Images
                    src={require("../../Assets/Property 1=sun 1.svg").default}
                    alt="sun"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
              </Squares>
              <Bsquares>
                <Imagecontainer>
                  <Images
                    src={require("../../Assets/Property 1=fire.svg").default}
                    alt="fire"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
              </Bsquares>
              <Vsquares>
                <Imagecontainer>
                  <Images
                    src={require("../../Assets/Property 1=console.svg").default}
                    alt="console"
                  />
                </Imagecontainer>
                <H6>$2250</H6>
                <Small>Summer Trip</Small>
              </Vsquares>
            </Bottomportion>
          </Down>
        </Leftcontainer>
        <Rightcontainer>
          <Graphheading>
            <H8>Analytics</H8>
            <Dot>
              <Smallsquareblack>
                <Blacksquare></Blacksquare>
                <Income>Income</Income>
              </Smallsquareblack>
              <Smallsquaregreen>
                <Greensquare></Greensquare>
                <Saving>Saving</Saving>
              </Smallsquaregreen>
            </Dot>
          </Graphheading>
          <GraphContainer>
            <Graphimage src={require("../../Assets/graph.png")} />
          </GraphContainer>
        </Rightcontainer>
      </Middle>
      <Footer>
        <Statsistics>
          <Headline>
            <H9>Statistics</H9>
            <Selectoptions value={selectedOption} onChange={handleSelectchange}>
              <Options value="2020" disabled>
                Select a year
              </Options>
              <Options value="2021">2021</Options>
              <Options value="2022">2022</Options>
              <Options value="2023">2023</Options>
              <Options value="2024">2024</Options>
            </Selectoptions>
          </Headline>
          <Incomecontainer>
            <Income2>
              <Blackingsquare>
                <Arrow
                  src={require("../../Assets/Property 1=up-arrow.svg").default}
                />
              </Blackingsquare>
              <Totalincome>
                <Incomespan>Total Income</Incomespan>
                <H10>$235</H10>
              </Totalincome>
              <Slanded>
                <Slandedimage src={require("../../Assets/graph1.png")} />
                <Biggraph></Biggraph>
              </Slanded>
              <Headingli>
                <H11>+20%</H11>
              </Headingli>
            </Income2>
            <Income2>
              <Blackingsquare>
                <Arrow
                  src={require("../../Assets/Property 1=up-arrow.svg").default}
                />
              </Blackingsquare>
              <Totalincome>
                <Incomespan>Total Income</Incomespan>
                <H10>$235</H10>
              </Totalincome>
              <Slanded>
                <Slandedimage src={require("../../Assets/graph1.png")} />
                <Smallgraph></Smallgraph>
              </Slanded>
              <Headingli>
                <H11>+8%</H11>
              </Headingli>
            </Income2>
            <Income2>
              <Blackingsquare>
                <Arrow
                  src={
                    require("../../Assets/Property 1=down-arrow.svg").default
                  }
                />
              </Blackingsquare>
              <Totalincome>
                <Incomespan>Total Income</Incomespan>
                <H10>$235</H10>
              </Totalincome>
              <Slanded>
                <Slandedimage src={require("../../Assets/graph1.png")} />
                <Mediumgraph></Mediumgraph>
              </Slanded>
              <Headingli>
                <H11>-18%</H11>
              </Headingli>
            </Income2>
          </Incomecontainer>
        </Statsistics>
        <Statsistics>
          <Headline>
            <H9>Transaction</H9>
            <Selectoptions>
              <Options value="2020" disabled>
                Select a year
              </Options>
              <Options value="2021">2021</Options>
              <Options value="2022">2022</Options>
              <Options value="2023">2023</Options>
              <Options value="2024">2024</Options>
            </Selectoptions>
          </Headline>
          <Incomecontainer>
            <Income2>
              <Blackingsquare>
                <Arrow
                  src={
                    require("../../Assets/Property 1=down-arrow.svg").default
                  }
                />
              </Blackingsquare>
              <Totalincome>
                <H10>Monthly Groceries</H10>
                <Incomespan>3 Apr 2022 at 3.15 PM</Incomespan>
              </Totalincome>
              <Liheading>
                <H12>+$2,20</H12>
              </Liheading>

              <Listcontainer>
                <Dots
                  src={require("../../Assets/Property 1=dot.svg").default}
                />
              </Listcontainer>
            </Income2>
            <Income2>
              <Blackingsquare>
                <Arrow
                  src={require("../../Assets/Property 1=up-arrow.svg").default}
                />
              </Blackingsquare>
              <Totalincome>
                <H10>Zabka Cashback</H10>
                <Incomespan>3 Apr 2022 at 3.15 PM</Incomespan>
              </Totalincome>
              <Liheading>
                <H13>-$220</H13>
              </Liheading>

              <Listcontainer>
                <Dots
                  src={require("../../Assets/Property 1=dot.svg").default}
                />
              </Listcontainer>
            </Income2>
            <Income2>
              <Blackingsquare>
                <Arrow
                  src={require("../../Assets/Property 1=up-arrow.svg").default}
                />
              </Blackingsquare>
              <Totalincome>
                <H10>Transfer to card</H10>
                <Incomespan>3 Apr 2022 at 3.15 PM</Incomespan>
              </Totalincome>
              <Liheading>
                <H14>+$80</H14>
              </Liheading>
              <Listcontainer>
                <Dots
                  src={require("../../Assets/Property 1=dot.svg").default}
                />
              </Listcontainer>
            </Income2>
          </Incomecontainer>
        </Statsistics>
      </Footer>
      <Popup trigger={openPopup} setTrigger={setopenPopup}>
              </Popup>
    </Main>
    
  );
}
const Main = styled.div`
  padding: 25px 1%;
  width: 85%;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const H1 = styled.h1`
  width: 48%;
`;
const Inputsearch = styled.div`
  display: flex;
  width: 48%;
`;
const Searchimage = styled.img`
  display: block;
  margin-right: -32px;
`;
const Maininput = styled.input`
  &::placeholder {
    font-size: 16px;
    font-family: "IBMPlexSans-Medium";
  }
  width: 100%;
  height: 42px;
  padding: 5px 35px;
  border: 1px solid #747474;
  border-radius: 5px;
`;
const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;
const Leftcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 49%;
  height: 450px;
`;
const UP = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  border-radius: 6px;
  height: 120px;
  padding: 20px;
`;
const Amountlist = styled.li`
  &:nth-child(2) {
    padding: 0;
    border: 1.5px solid #fff;
    border-top: 4px solid transparent;
    border-bottom: 15px solid transparent;
  }
  text-align: center;
  width: 33%;
`;
const Span = styled.span`
  font-family: "IBMPlexSans-Medium";
  color: #747474;
  font-size: 18px;
`;
const H2 = styled.h3`
  font-size: 28px;
  font-family: "IBMPlexSans-Medium";
  margin-top: 20px;
`;
const Down = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px 20px;
  border-radius: 6px;
`;
const Topportion = styled.div`
  display: flex;
  justify-content: space-between;
`;
const H4 = styled.h4`
  font-size: 24px;
`;
const Snavlink = styled.button`
  font-size: 18px;
  text-decoration: underline;
  font-family: "IBMPlexSans-Medium";
`;
const Bottomportion = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Squares = styled.div`
  background-color: #fec0a7;
  width: 31%;
  border-radius: 6px;
  padding: 20px;
  height: 190px;
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
const Small = styled.small`
  font-size: 18px;
  font-family: "IBMPlexSans-Medium";
`;
const Bsquares = styled.div`
  width: 31%;
  border-radius: 6px;
  background-color: #98bde5;
  padding: 20px;
`;
const Vsquares = styled.div`
  width: 31%;
  border-radius: 6px;
  background-color: rgb(152, 219, 229);
  padding: 20px;
`;
const Rightcontainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px 20px;
  border-radius: 6px;
  width: 48.5%;
  height: 450px;
`;
const Graphheading = styled.div`
  display: flex;
  justify-content: space-between;
`;
const H8 = styled.h4`
  font-size: 24px;
`;
const Dot = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Smallsquareblack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Blacksquare = styled.div`
  height: 10px;
  width: 10px;
  background-color: #deb887;
`;
const Income = styled.small``;
const Smallsquaregreen = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
`;
const Greensquare = styled.div`
  height: 10px;
  width: 10px;
  background-color: #008080;
`;
const Saving = styled.small``;
const GraphContainer = styled.div`
  width: 650px;
`;
const Graphimage = styled.img`
  display: block;
  width: 100%;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
`;
const Statsistics = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px 20px;
  border-radius: 6px;
  width: 49%;
`;
const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const H9 = styled.h4`
  font-size: 24px;
`;
const Selectoptions = styled.select`
  border: 1px solid #747474;
  border-radius: 16px;
  width: 20%;
  font-size: 20px;
  padding: 0px 5px;
`;
const Options = styled.option``;
const Incomecontainer = styled.div``;
const Income2 = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;
const Blackingsquare = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 6px;
`;
const Arrow = styled.img`
  display: block;
  width: 65%;
`;
const Totalincome = styled.li`
  width: 28%;
`;
const Incomespan = styled.span`
  font-size: 18px;
  font-family: "IBMPlexSans-Regular";
  color: #747474;
`;
const H10 = styled.h4`
  font-size: 24px;
  font-family: "IBMPlexSans-Medium";
`;
const Headingli = styled.li`
  width: 12%;
`;
const Slanded = styled.li`
  height: 30px;
  position: relative;
`;
const Slandedimage = styled.img`
  height: 30px;
  width: 100%;
`;
const H11 = styled.h5`
  font-size: 22px;
  font-family: "IBMPlexSans-Medium";
  width: 10%;
`;
const Biggraph = styled.div`
  height: 30px;
  width: 130px;
  background-color: #98bde5;
  border-radius: 3px;
  position: absolute;
  top: 0px;
`;
const Smallgraph = styled.div`
  height: 30px;
  width: 50px;
  background-color: rgb(152, 219, 229);
  border-radius: 3px;
  position: absolute;
  top: 0px;
`;
const Mediumgraph = styled.div`
  height: 30px;
  border-radius: 3px;
  width: 90px;
  background-color: #fec0a7;
  position: absolute;
  top: 0px;
`;
const Listcontainer = styled.li`
  width: 5%;
`;

const Dots = styled.img`
  display: block;
  width: 8 0%;
`;
const H12 = styled.h4`
  font-size: 24px;
  font-family: "IBMPlexSans-Medium";
  color: lightgreen;
`;
const H13 = styled.h4`
  font-size: 24px;
  font-family: "IBMPlexSans-Medium";

  color: red;
`;
const Liheading = styled.li`
  width: 25%;
`;
const H14 = styled.h4`
  font-size: 24px;
  font-family: "IBMPlexSans-Medium";
  color: lightgreen;
`;
export default Dashboard;
