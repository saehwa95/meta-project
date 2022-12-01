//행사 방식을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/eventMethod.css";

const EventMethod = () => {
  return (
    <div className="system-box">
      <div className="system-title">
        <span>행사 방식</span>
      </div>
      <div className="system-check">
        <input type="radio" id="live" />
        <label for="live">라이브 행사</label>
        <input type="radio" id="vod" />
        <label for="vod">VOD 행사</label>
        <input type="radio" id="strimming" />
        <label for="strimming">스트리밍 행사</label>
        <input type="radio" id="data" />
        <label for="data">자료 행사</label>
      </div>
    </div>
  );
};

export default EventMethod;
