import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import * as dummy from "../dummyData";
import styled from "styled-components";

const CountDiv = styled.div`
  background-color: #aeaeae;

  position: relative;
  img {
    width: 100%;
  }
  div {
    padding: 15px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
    p {
      margin: 0;
      margin-top: 10px;
      font-size: 30px;
    }
  }
`;

function IndexPage() {
  let banners = dummy.bannerData.map((src, i) => {
    if (i === 0)
      return () => (
        <CountDiv className="swiper-slide">
          <img src={src} alt="banner img" />
          <div>
            지금까지
            <p>
              총 <b>5,100,401,410원</b>
            </p>
          </div>
        </CountDiv>
      );
    return () => <img className="swiper-slide" src={src} alt="banner img" />;
  });

  return (
    <div>
      <Banner Components={banners} />
      <Category
        title={"최근 기부"}
        infos={[
          {
            idx: 1,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 50,
            isImminent: true,
          },
          {
            idx: 2,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 80,
          },
          {
            idx: 3,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 10,
          },
          {
            idx: 4,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 70,
          },
        ]}
      />
      <Category
        title={"완료 후기"}
        infos={[
          {
            idx: 5,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 50,
            isImminent: true,
          },
          {
            idx: 6,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 80,
            isImminent: true,
          },
          {
            idx: 7,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 10,
          },
          {
            idx: 8,
            src: process.env.PUBLIC_URL + "/hunger.jpeg",
            title: "의료진에게 힘을 보태주세요!",
            institution: "아주대학교병원",
            progress: 70,
          },
        ]}
      />
    </div>
  );
}

export default IndexPage;
