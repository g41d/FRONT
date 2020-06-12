import React from "react";
import { Link, useParams } from "react-router-dom";
import TopSummary from "../components/TopSummary";
import DetailContent from "../components/DetailContent";
import FundingFloatingButton from "../components/FundingFloatingButton";

function FundingDetail() {
  let { idx } = useParams();
  return (
    <div>
      <TopSummary />
      <DetailContent />
      <FundingFloatingButton />
    </div>
  );
}

export default FundingDetail;
