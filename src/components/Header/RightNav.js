import React, { useState } from "react";
import styled from "styled-components";

const UL = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
    }
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
