import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  height: 57px;
  background-color: #313131;
  margin-top: 15px;
  position: relative;

  .kflogo {
    position: absolute;
    left: 18px;
    top: 18px;
    bottom: 17px;

    width: 139px;
    height: 22px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: -0.36px;
    text-align: left;
    color: white;
  }

  .company {
    position: absolute;
    left: 202px;
    top: 21px;
    bottom: 19px;

    width: 48px;
    height: 18px;
    font-family: NotoSansKR;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: right;
    color: #c4c4c4;
  }

  .faq {
    position: absolute;
    left: 264px;
    top: 21px;
    bottom: 19px;

    width: 37px;
    height: 18px;
    font-family: NotoSansKR;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: right;
    color: #c4c4c4;
  }

  .help {
    position: absolute;
    left: 319px;
    top: 21px;
    bottom: 19px;

    width: 48px;
    height: 18px;
    font-family: NotoSansKR;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: right;
    color: #c4c4c4;
  }
`;

const Footer = () => (
  <FooterDiv>
    <span className="kflogo">KIND FUNDING</span>

    <span className="flexContainer"></span>

    <span className="company">회사소개</span>
    <span className="faq">도움말</span>
    <span className="help">문의하기</span>
  </FooterDiv>
);

export default Footer;
