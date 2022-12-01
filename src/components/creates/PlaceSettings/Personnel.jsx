//인원제한 작성을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/placeSetting/personnel.css";

const Personnel = () => {
  return (
    <div className="meta-place">
      <span className="meta-place__setting">⬛ 가상공간 설정</span>
      <span className="personnel">인원제한</span>
      <select className="person-option">
        <option>입력</option>
        <option value={10}>10명</option>
        <option value={20}>20명</option>
        <option value={30}>30명</option>
        <option value={40}>40명</option>
        <option value={50}>50명</option>
        <option value={60}>60명</option>
        <option value={70}>70명</option>
        <option value={80}>80명</option>
        <option value={90}>90명</option>
        <option value={100}>100명</option>
      </select>
      <span>명</span>
      <select className="person-option">
        <option>입력</option>
        <option value={5}>5명</option>
        <option value={10}>10명</option>
        <option value={15}>15명</option>
        <option value={20}>20명</option>
      </select>
      <span>명</span>
      <span>{` (총 인원 수 / 채널 인원 수)`} </span>
      <i class="far fa-question-circle"></i>
    </div>
  );
};

export default Personnel;
