import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import Headers from "../components/Headers";
import ContentInformation from '../../src/components/contents/ContentInformation'
import ContentList from "../components/contents/ContentList";
import ContentDetail from "../components/contents/ContentDetail";

const projectContents = () => {
  return (
    <>
      <Category />
      <Wrap>
        <Headers />
        <ContentInformation />
        <ContentList />
        <ContentDetail/>
      </Wrap>
    </>
  );
};

export default projectContents;

const Wrap = styled.div`
  padding: 0 30px 0 260px;
`;