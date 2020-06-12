import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  margin-top: 20px;
  .title-wrapper {
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 26px;
      font-weight: bold;
    }
    .more-anchor {
      font-size: 16px;
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
        <Link to="/more" className="more-anchor">
          더보기
        </Link>
      </div>
      <div className="card-list">
        {infos.map((info, i) => (
          <Card key={i} {...info} />
        ))}
      </div>
    </StyledDiv>
  );
}

export default Category;
