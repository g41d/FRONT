import React from "react";
import Burger from "./Burger";
import styled from "styled-components";

const StyledDiv = styled.div`
  .fixed-div {
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    .logo {
      font-size: 22px;
      line-height: 55px;
    }
  }
  &::after {
    content: "";
    display: block;
    height: 55px;
  }
`;

const Header = () => (
  <StyledDiv>
    <div className="fixed-div">
      <div className="logo">Nav Bar</div>
      <Burger />
    </div>
  </StyledDiv>
);

export default Header;
