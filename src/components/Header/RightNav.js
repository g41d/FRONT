import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  li {
    padding: 16px 18px;
    font-family: NotoSansKR;
    font-size: 17px;
    font-weight: 548;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    flex-flow: column wrap;
    background-color: #4e7eff;
    position: fixed;
    top: 0;
    left: -255px;
    height: 100vh;
    width: 255px;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    transition: transform 0.3s ease-in-out;
    flex-flow: column wrap;
  }
  ${({ open }) => open && "box-shadow:rgba(0,0,0,0.5) 0 0 0 9999px;"}
`;

const Hr = styled.hr`
  backgroundcolor: #ebebeb;
  color: #ebebeb;
  bordercolor: #ebebeb;
  height: 5;
  width: 220px;
  opacity: 0.3;
`;

const LogoutSpan = styled.span`
  padding-top: 15px;
  padding-left: 18px;

  width: 78px;
  height: 30px;
  opacity: 0.5;
  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

const Profile = styled.div`
  height: 111px;

  .photo {
    float: left;
    height: 66px;
    weight: 66px;
    z-index: 10;
    border-radius: 50%;
  }
  img {
    padding-left: 16px;
    padding-top: 26px;
  }

  .nickname {
    position: absolute;
    width: 55px;
    height: 27px;
    font-family: NotoSansKR;
    top: 88px;
    right: 91px;

    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .hello {
    position: absolute;
    top: 125px;
    right: 77px;

    width: 69px;
    height: 18px;
    opacity: 0.5;
    font-family: NotoSansKR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <Profile>
        <span className="photo">
          <img src="/img_profile.png" />
        </span>
        <span className="nickname">닉네임</span>
        <span className="hello">반갑습니다!</span>
      </Profile>

      <Hr />
      <li>최근기부</li>
      <li>기부하러 가기</li>
      <li>마이페이지</li>
      <li>기부후기</li>
      <li>메뉴</li>
      <Hr />
      <LogoutSpan>로그아웃</LogoutSpan>
    </UL>
  );
};
export default RightNav;
