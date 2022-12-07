//알람 설정을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/alarmSetting.css";
import Toggle from "../../../css/elements/Toggle.jsx";

const AlarmSetting = () => {
  return (
    <div className="alarm-box">
      <div className="alarm-title">
        <span>알림 설정</span>
      </div>
      <div className="alarm-check">
        <Toggle/>
        <select className="time-option">
          <option>10분 전</option>
          <option>15분 전</option>
          <option>20분 전</option>
          <option>30분 전</option>
          <option>1시간 전</option>
        </select>
      </div>
    </div>
  );
};

export default AlarmSetting;
