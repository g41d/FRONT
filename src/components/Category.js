import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledDiv = styled.div`
  margin-top: 20px;
  .title-wrapper {
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: flex-end;
    .title {
      font-size: 26px;
      font-weight: bold;
    }
    .more-anchor {
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: #c4c4c4;
    }
  }
  .card-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px 16px;
    grid-gap: 16px;
  }
  @media (max-width: 767px) {
    .card-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

function Category({ title, infos }) {
  return (
    <StyledDiv>
      <div className="title-wrapper">
        <span className="title">{title}</span>
        <a className="more-anchor" href="#">
          더보기
        </a>
      </div>
      <div className="card-list">
        {infos.map((info) => (
          <Card {...info} />
        ))}
      </div>
    </StyledDiv>
  );
}

export default Category;
