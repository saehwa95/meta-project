//프로젝트 설명을 위한 파일입니다.
import React from "react";
import "../../../css/components/create/placeSetting/projectExplanation.css";

const ProjectExplanation = () => {
  return (
    <div className="projectExplanation">
      <div className="project-information">
        <span style={{ fontSize: "12px", color: "red"}}>* 필수</span>
        <span>프로젝트 설명</span>
      </div>
      <div className="project-information__input">
        <input
          type="text"
          placeholder={
            "모바일에서 표시될 프로젝트 설명을 입력해주세요. (50자 이내)"
          }
        />
      </div>
    </div>
  );
};

export default ProjectExplanation;
