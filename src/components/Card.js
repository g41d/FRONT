import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #313131;
  display: inline-block;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    border-radius: 15px;
  }
  .imminent {
    color: #fff;
    font-size: 11px;
    background-color: #444;
    border-radius: 12px;
    padding: 3px 8px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
  .title {
    padding: 5px;
    font-size: 20px;
  }
  .institution {
    font-size: 14px;
    padding: 0 5px;
    color: #c4c4c4;
  }
`;
const PorgressDiv = styled.div`
  .bar {
    background-color: #ebebeb;
    display: inline-block;
    width: calc(100% - 60px);
    height: 6px;
    border-radius: 4px;
    div {
      width: ${({ progress }) => progress}%;
      height: 6px;
      border-radius: 4px;
      background-color: #f5cccc;
    }
  }
  .text {
    padding-right: 5px;
    float: right;
    font-size: 18px;
    font-weight: bold;
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

function Card({ index, src, title, institution, progress, isImminent }) {
  return (
    <StyledAnchor href={"/detail/index"}>
      <img src={src} alt={title} />
      {isImminent && <span className="imminent">마감임박</span>}
      <div className="title">{title}</div>
      <div className="institution">{institution}</div>
      <ProgressBar progress={progress} />
    </StyledAnchor>
  );
}

export default Card;
