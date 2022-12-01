// 썸네일 작성을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/placeSetting/thumbnail.css";

const Thumbnail = () => {
  return (
    <div className="profile">
      <div className="profile-name">
        <span>썸네일</span>
      </div>
      <div className="profile-content-left">
        <input
          type="radio"
          id="notuseSum"
          value="notuseSum"
          name="musicSum"
          checked
        />
        <label for="notuseSum">사용 안함</label>
      </div>
      <div className="profile-content-right">
        <input type="radio" id="useSum" value="사용" name="musicSum" />
        <label for="useSum">사용</label>
        <span className="thumbnail-span">모바일 홈 화면에 보여질 썸네일을 등록할 수 있습니다.</span>
      </div>
    </div>
  );
};

export default Thumbnail;
