// 친구 기능을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/details/freinds.css";
const friend = () => {
  return (
    <>
      <div className="detail-function">
        <span className="meta-place__setting">⬛ 상세 기능</span>
      </div>

      <div className="friend-box">
        <div className="friend-title">
          <span className="overlap">(중복 가능)</span>
          <span>친구 기능</span>
        </div>

        <div className="friend-check">
          <input type="radio" id="friendNo" value="nofriend" name="no" checked />
          <label for="friendNo">친구기능 없음</label>
          <input type="radio" id="addF" value="addfriend" name="add" />
          <label for="addF">친구 추가</label>
          <input type="radio" id="searchF" value="searchfriend" name="search" />
          <label for="searchF">친구 검색</label>
        </div>
      </div>
    </>
  );
};

export default friend;
