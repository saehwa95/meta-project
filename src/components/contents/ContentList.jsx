import React from "react";
import "../../css/components/contents/contentList.css";

const ContentList = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>NO.</th>
            <th>프로젝트 명</th>
            <th>기간</th>
            <th>행사 방식</th>
            <th>등록 일자</th>
            <th className="last-th">수정 날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>피그마 제대로 배워 보고싶다면?</td>
            <td>2020.02.02 ~ 2021.02.05</td>
            <td>Live</td>
            <td>2020-03-31</td>
            <td className="last-td">2020-03-31</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2023 유망 주식 살펴보기</td>
            <td>항상</td>
            <td>VOD</td>
            <td>2020-03-31</td>
            <td className="last-td">2020-03-31</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ContentList;
