import React from "react";
import styled from "styled-components";

const WrapDiv = styled.div`
  height: 280px;
  margin-bottom: 15px;
  position: relative;
`;

const ContDiv = styled.div`
  display: table;
  width: 100%;
  height: 242px;
  background-repeat: no-repeat;
  position: relative;
  background-position: 50% 50%;
  background-image: url("https://mud-kage.kakaocdn.net/dn/brzToS/btqEj6OrUCU/cvTd2kQfeAGjdAHsdbkjzK/c360.jpg");
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    display: block;
    background-image: linear-gradient(
      to top,
      rgba(0.2, 0.3, 0.3, 0.65),
      rgba(255, 255, 255, 0.5)
    );
  }
`;

const FrontPack = styled.div`
  display: table-cell;
  position: relative;
  z-index: 10;
  text-align: center;
  vertical-align: middle;
`;

const Logo = styled.span`
  position: relative;
  width: 57px;
  height: 57px;
  object-fit: contain;
  img {
    border-radius: 50%;
    margin-bottom: 15px;
  }
`;

const H4 = styled.h4`
  width: auto;
  margin-bottom: 9px;
  font-size: 22px;
  color: white;
  font-family: NotoSansKR-Bold;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.5;
`;

const Sponsor = styled.span`
  padding-top: 7px;
  height: 15px;
  font-family: NotoSansKR;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #c4c4c4;
`;

const TopSummary = () => {
  return (
    <WrapDiv>
      <ContDiv>
        <FrontPack>
          <Logo>
            <img src="/ajoo.png" />
          </Logo>
          <H4>의료진에게 힘을 보태주세요!</H4>
          <Sponsor>아주대학교병원</Sponsor>
        </FrontPack>
      </ContDiv>
    </WrapDiv>
  );
};

export default TopSummary;
