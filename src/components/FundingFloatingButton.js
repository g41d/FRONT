import React from "react";
import { Link } from "react-router-dom";

const AnchorStyle = {
  position: "fixed",
  bottom: "10px",
  right: "10px",
};

function FundingFloatingButton({ idx }) {
  return (
    <Link style={AnchorStyle} to={`/funding/${idx}`}>
      <img src={process.env.PUBLIC_URL + "/btn_donate.svg"} alt="펀딩 버튼" />
    </Link>
  );
}

export default FundingFloatingButton;
