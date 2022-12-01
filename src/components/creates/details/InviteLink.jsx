//초대링크 생성을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/inviteLink.css";
import Toggle from "../../../css/elements/Toggle.jsx";

const InviteLink = () => {
  return (
    <div className="invite-box">
      <div className="invite-title">
        <span>초대링크 생성</span>
      </div>
      <div className="invite-check">
        <Toggle />
      </div>
    </div>
  );
};

export default InviteLink;
