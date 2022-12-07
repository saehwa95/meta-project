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
        <span className="invite-title-span">앱 내부에 초대 링크가 생성됩니다.</span>
      </div>
    </div>
  );
};

export default InviteLink;
