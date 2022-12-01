import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import Information from "../components/creates/Information";
import Headers from "../components/Headers";
import Personnel from "../components/creates/PlaceSettings/Personnel";
import MetaPlace from "../components/creates/PlaceSettings/MetaPlace";
import ProjectExplanation from "../components/creates/PlaceSettings/ProjectExplanation";
import Music from "../components/creates/PlaceSettings/Music";
import Thumbnail from "../components/creates/PlaceSettings/Thumbnail";

const projectCreate = () => {
  return (
    <>
      <Category />
      <Wrap>
        <Headers />
        <form>
          <Information />
          <Personnel />
          <MetaPlace />
          <Music />
          <Thumbnail />
          <ProjectExplanation />
        </form>
      </Wrap>
    </>
  );
};

export default projectCreate;

const Wrap = styled.div`
  padding: 0 30px 0 260px;
`;