import React from "react";
import { Link, useParams } from "react-router-dom";

function FundingDetail() {
  let { type } = useParams();
  console.log(type);
  return <div></div>;
}

export default FundingDetail;
