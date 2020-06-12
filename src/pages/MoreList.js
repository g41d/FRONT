import React from "react";
import Category from "../components/Category";
import { useParams } from "react-router-dom";

const data = {
  funding: [
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
  ],
  complete: [
    {
      idx: 1,
      src: process.env.PUBLIC_URL + "/hunger.jpeg",
      title: "의료진에게 힘을 보태주세요!",
      institution: "아주대학교병원",
      progress: 50,
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
    {
      idx: 1,
      src: process.env.PUBLIC_URL + "/hunger.jpeg",
      title: "의료진에게 힘을 보태주세요!",
      institution: "아주대학교병원",
      progress: 50,
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
  ],
};

function FundingDetail() {
  let { type } = useParams();
  return (
    <Category
      title={type === "complete" ? "모금후기" : "기부하기"}
      complete={type === "complete"}
      infos={data[type]}
    />
  );
}

export default FundingDetail;
