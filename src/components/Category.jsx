import React from "react";
import '../css/category.css'

const Category = () => {
  return (
    <>
      <div className="category-wrapper">
        <h2 className="categorys">Meta Frame</h2>
        <button className="category-btn">HOME</button>
        <button className="category-btn">프로젝트 생성</button>
        <button className="category-btn">프로젝트 콘텐츠</button>
        <button className="category-btn">Assets</button>
        <button className="category-btn">나의 계정</button>
      </div>
    </>
  );
};

export default Category;
