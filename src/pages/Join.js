import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 35px 46px;
  min-height: calc(100vh - 112px);
  .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
  }
  .display-tab {
    display: flex;
    justify-content: space-around;
    margin: 28px 0 18px;
    div {
      font-size: 14px;
      font-weight: 500;
      color: #c4c4c4;
    }
    .activate {
      color: #4e7eff;
      &::after {
        content: "";
        display: inline-block;
        height: 4px;
        width: 100%;
        background-color: #4e7eff;
      }
    }
  }
  .input-category {
    margin-top: 18px;
    font-size: 14px;
    font-weight: 500;
    input {
      padding-left: 10px;
      width: 100%;
      margin: 8px 0;
      height: 40px;
      border-radius: 4px;
      border: solid 1px #c4c4c4;
      &:focus {
        border: solid 1px #4e7eff;
      }
    }
    input::placeholder {
      color: #c4c4c4;
    }
    input:nth-child(3) {
      margin-top: 0;
    }
  }
  .confirm {
    margin-top: 40px;
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 4px;
    background-color: #4e7eff;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  }
  .confirm.disable {
    background-color: #aaaaaa;
  }
`;

function Join() {
  const [type, setType] = useState(0);
  return (
    <StyledDiv>
      <div className="title">회원가입</div>
      <div className="display-tab">
        <div onClick={() => setType(!type)} className={type ? "" : "activate"}>
          일반 회원
        </div>
        <div onClick={() => setType(!type)} className={type ? "activate" : ""}>
          병원 및 기업
        </div>
      </div>
      <div className="input-category">
        <div>아이디</div>
        <input type="text" placeholder="아이디를 입력해 주세요." />
      </div>
      <div className="input-category">
        <div>비밀번호</div>
        <input type="password" placeholder="비밀번호를 입력해 주세요." />
        <input
          type="password"
          placeholder="비밀번호를 한번 더 입력해 주세요."
        />
      </div>
      {type ? (
        <div className="input-category">
          <div>병원명</div>
          <input type="text" placeholder="병원명을 입력해 주세요." />
        </div>
      ) : (
        <>
          <div className="input-category">
            <div>닉네임</div>
            <input type="text" placeholder="닉네임을 입력해 주세요." />
          </div>
          <div className="input-category">
            <div>이메일</div>
            <input type="text" placeholder="이메일을 입력해 주세요." />
          </div>
          <div className="input-category">
            <div>핸드폰번호</div>
            <input type="text" placeholder="핸드폰번호를 입력해 주세요." />
          </div>
        </>
      )}
      <button className="confirm disable">완료</button>
    </StyledDiv>
  );
}

export default Join;
