// 배경음 설정을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/placeSetting/music.css";

const Music = () => {
  return (
    <div className="musicSettings">
      <div className="music-setting">
        <span>배경음 설정</span>
      </div>
      <div className="music-content">
        <input type="radio" id="notuse" value="notuse" name="musicRadio" />
        <label for="notuse">사용 안함</label>
        <input type="radio" id="use" value="use" name="musicRadio" />
        <label for="use">사용</label>
      </div>
    </div>
  );
};

export default Music;
