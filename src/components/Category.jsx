import React from "react";
import { Link } from "react-router-dom";
import '../css/category.css'

const Category = () => {
  return (
    <>
      <div className="category-wrapper">
        <h2 className="categorys">Meta Frame</h2>
        <Link to="/"  className="category-btn">HOME</Link>
        <Link to="/" className="category-btn">프로젝트 생성</Link>
        <Link to="/ProjectContents" className="category-btn">프로젝트 콘텐츠</Link>
        <Link to="/Asset" className="category-btn">Assets</Link>
        <Link to="/"  className="category-btn">나의 계정</Link>
      </div>
    </>
  );
};

export default Category;
