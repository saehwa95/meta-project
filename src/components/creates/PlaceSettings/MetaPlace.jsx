// 가상공간, 가상공간 이름을 작성합니다.
import React from "react";
import "../../../css/components/create/placeSetting/metaPlace.css";

const MetaPlace = () => {
  return (
    <>
      <div className="meta-wrap">
        <div className="meta-place__title">
          <span>가상공간</span>
        </div>
        <div className="meta-place__img">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="meta-wrap_name">
        <div className="meta-place__name">
          <span>가상공간 이름</span>
        </div>
        <div className="project-name">
          <input
            type="text"
            placeholder="모바일에서 표시될 프로젝트 설명을 입력해주세요. (50자 이내)"
          />
          <span className="project-name-span">모바일 홈 화면에 보여질 썸네일을 등록할 수 있습니다.</span>
        </div>
      </div>
    </>
  );
};

export default MetaPlace;
