import React from "react";
import styled from "styled-components";

const ItemListDiv = styled.div`
  border-radius: 4px;
  background-color: #f7f7f7;
  padding: 8px 0;
  .item {
    padding: 8px 16px;
  }
  .name {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #313131;
  }
  .money {
    display: inline-block;
    width: 100px;
    text-align: right;
    font-size: 14px;
    line-height: 1.43;
    color: #c4c4c4;
  }
  .count {
    margin-right: 10px;
    float: right;
    font-size: 16px;
    line-height: 1.25;
    color: #313131;
  }
`;

function ItemList({ infos }) {
  return infos && infos.length ? (
    <ItemListDiv>
      {infos.map((info) => (
        <div className="item">
          <span className="name">{info.name}</span>
          <span className="money">{info.money}원</span>
          <span className="count">
            {info.count}/{info.target}
          </span>
        </div>
      ))}
    </ItemListDiv>
  ) : null;
}

export default ItemList;
