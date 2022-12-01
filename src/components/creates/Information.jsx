//상단의 프로젝트 생성, 내용, 프로젝트 제목
import React from "react";
import "../../css/components/create/placeSetting/information.css";

const Information = () => {
  return (
    <>
      <div className="title">
        <span>프로젝트 생성</span>
      </div>
      <div className="subTitle">
        <span>모바일 앱에서 실행 될 프로젝트를 생성합니다.</span>
      </div>

      <div className="div-wrap">
        <div className="div-title">
          <span>프로젝트 제목</span>
        </div>
        <label>
            <input
              type="text"
              className="title-content"
              placeholder="운영 페이지에서 확인할 프로젝트 제목을 입력해 주세요. (50자 이내)"
            />
        </label>
      </div>
    </>
  );
};

export default Information;
