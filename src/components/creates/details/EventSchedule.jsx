//행사 일정을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/eventSchedule.css";

const EventSchedule = () => {
  return (
    <div className="schedule-box">
      <div className="schedule-title">
        <span>행사 일정</span>
      </div>
      <div className="schedule-check">
        <input type="radio" id="always" />
        <label for="always">항상</label>
        <input type="radio" id="setting" />
        <label for="setting">설정</label>
      </div>
    </div>
  );
};

export default EventSchedule;
