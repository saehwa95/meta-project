// 아바타 설정을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/avatar.css";

const Avatar = () => {
  return (
    <div className="avatar-box">
      <div className="avatar-title">
        <span>아바타 설정</span>
      </div>
      <div className="avatar-check">
        <input type="radio" id="default"/>
        <label for="default">기본 제공 아바타</label>
        <input type="radio" id="choose"/>
        <label for="choose">선택 아바타</label>
        <input type="radio" id="custom"/>
        <label for="custom">커스터마이징</label>
      </div>
    </div>
  );
};

export default Avatar;
