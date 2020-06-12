import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 767px) {
    flex-flow: column wrap;
    background-color: white;
    position: fixed;
    top: 0;
    left: -300px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    transition: transform 0.3s ease-in-out;
    flex-flow: column wrap;
  }
  ${({ open }) => open && "box-shadow:rgba(0,0,0,0.5) 0 0 0 9999px;"}
`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <li>로그인</li>
      <li>마이페이지</li>
      <li>일단</li>
      <li>넣었음</li>
    </UL>
  );
};
export default RightNav;
