// 채팅 방식을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/chatting.css";

const Chatting = () => {
  return (
    <div className="chat-box">
      <div className="chat-title">
        <span className="overlap">(중복 가능)</span>
        <span>채팅 방식</span>
      </div>
      <div className="chat-check">
        <input type="radio" id="noChat" />
        <label for="noChat">채팅 없음</label>
        <input type="radio" id="text-chatting"/>
        <label for="text-chatting">텍스트 채팅</label>
        <input type="radio" id="voice-chatting"/>
        <label for="voice-chatting">음성 채팅</label>
        <input type="radio" id="video-chatting"/>
        <label for="video-chatting">화상 채팅</label>
      </div>
    </div>
  );
};

export default Chatting;
