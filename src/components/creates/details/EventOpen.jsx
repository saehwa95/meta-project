//행사 공개를 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/eventOpen.css";

const EventOpen = () => {
  return (
    <div className="open-box">
      <div className="open-title">
        <span>공개</span>
      </div>
      <div className="open-check">
        <input type="radio" id="open" />
        <label for="open">공개</label>
        <input type="radio" id="private" />
        <label for="private">비공개</label>
      </div>
    </div>
  );
};

export default EventOpen;
