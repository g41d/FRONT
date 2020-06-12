import React from "react";
import { Link, useParams } from "react-router-dom";

function FundingDetail() {
  let { idx } = useParams();
  console.log(idx);
  return <div></div>;
}

export default FundingDetail;
