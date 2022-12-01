//게임 설정을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/gameSetting.css";

const GameSetting = () => {
  return (
    <div className="game-box">
      <div className="game-title">
        <span>게임 설정</span>
      </div>
      <div className="game-check">
        <input type="radio" />
        <label>게임 없음</label>
        <input type="radio" />
        <label>O X 퀴즈</label>
        <input type="radio" />
        <label>달리기게임</label>
        <input type="radio" />
        <label>리듬 게임</label>
      </div>
    </div>
  );
};

export default GameSetting;
