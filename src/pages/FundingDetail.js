import React from "react";
import { Link, useParams } from "react-router-dom";
import TopSummary from "../components/TopSummary";

function FundingDetail() {
  let { idx } = useParams();
  return (
    <div>
      <TopSummary />
    </div>
  );
}

export default FundingDetail;
