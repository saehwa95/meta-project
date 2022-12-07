//상단의 프로젝트 생성, 내용, 프로젝트 제목
import React from "react";
import "../../css/components/contents/contentInformation.css"

const ContentInformation = () => {
  return (
    <>
      <div className="title">
        <span>프로젝트 콘텐츠</span>
      </div>
      <div className="subTitle">
        <span>등록된 프로젝트를 확인하고, 관리할 수 있습니다.</span>
      </div>
    </>
  );
};

export default ContentInformation;
