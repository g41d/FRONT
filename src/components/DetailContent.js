import React from "react";
import styled from "styled-components";
import ItemList from "./ItemList";

const StyledDiv = styled.div`
  padding: 0 16px;
  color: #313131;
  .date {
    font-weight: normal;
    line-height: 1.43;
    margin-bottom: 16px;
  }
  .institutions {
    background-color: #f7f7f7;
    padding: 16px;
    .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.45;
      margin-bottom: 22px;
    }
    .institution {
      display: flex;
      padding: 12px 0;
      .logo {
        object-fit: contain;
        margin: 0 30px;
        width: 62px;
        height: 62px;
        border-radius: 100%;
        background-color: #fff;
      }
      & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;
        }
        .description {
          font-size: 12px;
          line-height: 1.5;
          color: #c4c4c4;
        }
      }
    }
  }
  .recommend-list {
    margin: 16px 0 32px;
    overflow-x: auto;
    white-space: nowrap;
    .card {
      display: inline-block;
      margin-left: 16px;
      .black {
        position: relative;
        img {
          border-radius: 4px;
          width: 44vw;
        }
        div {
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .title {
        margin-top: 6px;
      }
      .institution {
        font-size: 10px;
        line-height: 2;
        color: #c4c4c4;
      }
    }
  }
`;

const TextContent = styled.div`
  margin-bottom: 60px;
  h2 {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.45;
  }
  p {
    margin: 10px 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;
const Progress = styled.div`
  margin: 16px 0;
  color: #313131;
  .text > span {
    font-size: 22px;
    font-weight: bold;
    line-height: 0.91;
    color: #313131;
    margin-left: 11px;
    vertical-align: middle;
  }
  .bar {
    margin-top: 7px;
    background-color: #ebebeb;
    display: inline-block;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    div {
      width: ${({ progress }) => progress}%;
      height: 8px;
      border-radius: 4px;
      background-color: #4e7eff;
    }
  }
`;

function DetailContent() {
  return (
    <StyledDiv>
      <TextContent>
        <h2>계속되는 코로나19, 우리의 마음은 괜찮을까?</h2>
        <br />
        <p>
          잠시 주춤하던 코로나19가 지역사회 전파로 다시 확산하고 있습니다.
          코로나19 감염증이 장기화되면서 불안과 우울을 호소하는 사람이 늘었고,
          코로나19와 우울감(blue)을 합친 ‘코로나 블루’라는 신조어까지
          등장했습니다.
        </p>
        <p>
          또한 경기연구원의 통계에 의하면 국민의 48%가 코로나 정국으로 인해
          우울감을 느끼고 있으며, 그 수치가 세월호 참사나 메르스 정국 때보다도
          높은 결과를 나타낸다고 합니다. 어쩌면 지금 우리 사회는 이제껏 겪어보지
          못했던 역경을 극복하며 생각보다 큰 성장통을 경험하고 있는지도
          모르겠습니다.
        </p>
      </TextContent>
      <ItemList
        infos={[
          { name: "마스크", money: 1500, target: 1000, count: 59 },
          { name: "방호복", money: 48000, target: 500, count: 102 },
        ]}
      />
      <Progress progress={60}>
        <div className="text">
          진행률<span>{60}%</span>
        </div>
        <div className="bar">
          <div></div>
        </div>
      </Progress>
      <div className="date">
        모금기간 : {"2020.06.12"} ~ {"2020.06.26"}
      </div>
      <div className="institutions">
        <div className="title">함께하는 업체</div>
        <div className="institution">
          <img className="logo" src="/welkeeps.jpg" alt="기업 로고" />
          <div>
            <div className="name">{"웰킵스"}</div>
            <div className="description">
              {"국내최대 마스크 제작업체입니다."}
            </div>
          </div>
        </div>
        <div className="institution">
          <img className="logo" src="/welkeeps.jpg" alt="기업 로고" />
          <div>
            <div className="name">{"업체명"}</div>
            <div className="description">
              {"국내최대 마스크 제작업체입니다."}
            </div>
          </div>
        </div>
      </div>
      <div className="recommend-list">
        {[
          {
            src: "/nurse.jpg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
          },
          {
            src: "/nurse.jpg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
          },
          {
            src: "/nurse.jpg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
          },
        ].map((info) => (
          <li className="card">
            <div className="black">
              <div></div>
              <img src={info.src} alt="펀딩 페이지 썸네일" />
            </div>
            <div className="title">{info.title}</div>
            <div className="institution">{info.institution}</div>
          </li>
        ))}
      </div>
    </StyledDiv>
  );
}

export default DetailContent;
