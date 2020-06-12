import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLi = styled.li`
  text-decoration: none;
  color: #313131;
  display: inline-block;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    border-radius: 4px;
  }
  .imminent {
    background-color: #fff;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    color: #4e7eff;
    padding: 4px 8px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
  .title {
    font-size: 14px;
    line-height: 1.43;
    color: #313131;
    margin-bottom: 5px;
  }
  .institution {
    font-size: 10px;
    font-weight: normal;
    line-height: 2;
    color: #c4c4c4;
  }
`;
const PorgressDiv = styled.div`
  .bar {
    background-color: #ebebeb;
    display: inline-block;
    width: calc(100% - 45px);
    height: 4px;
    border-radius: 2px;
    div {
      width: ${({ progress }) => progress}%;
      height: 4px;
      border-radius: 2px;
      background-color: #4880ff;
    }
  }
  .text {
    float: right;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #4880ff;
  }
`;

const ProgressBar = ({ progress }) => (
  <PorgressDiv progress={progress}>
    <div className="bar">
      <div></div>
    </div>
    <span className="text">{progress}%</span>
  </PorgressDiv>
);

function Card({ idx, src, title, institution, progress, isImminent }) {
  return (
    <StyledLi>
      <Link to={`/detail/${idx}`} className="more-anchor">
        <img src={src} alt={title} />
        {isImminent && <span className="imminent">마감임박</span>}
        <div className="title">{title}</div>
        <div className="institution">{institution}</div>
        <ProgressBar progress={progress} />
      </Link>
    </StyledLi>
  );
}

export default Card;
