import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  height: 57px;
  background-color: #313131;
  color: #aaa;
  display: flex;
  align-items: center;

  img {
    flex: 1;
    margin-left: 16px;
  }

  .links {
    flex: 2;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    display: flex;
    justify-content: space-around;
  }
`;

const Footer = () => (
  <FooterDiv>
    <img src="/footer_title.svg" alt="푸터 로고" />
    <div className="links">
      <span>회사소개</span>
      <span>도움말</span>
      <span>문의하기</span>
    </div>
  </FooterDiv>
);

export default Footer;
