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
import Friend from "../components/creates/details/Friend";
import Avatar from "../components/creates/details/Avatar";
import Chatting from "../components/creates/details/Chatting";
import EventSchedule from "../components/creates/details/EventSchedule";
import EventMethod from "../components/creates/details/EventMethod";
import EventOpen from "../components/creates/details/EventOpen";
import GameSetting from "../components/creates/details/GameSetting";
import AlarmSetting from "../components/creates/details/AlarmSetting";
import InviteLink from "../components/creates/details/InviteLink";
import "../pages/projectCreate.css";

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
          <Friend />
          <Avatar />
          <Chatting />
          <EventSchedule />
          <EventMethod />
          <EventOpen />
          <GameSetting />
          <AlarmSetting />
          <InviteLink />
          <div className="btn-box">
            <button className="create-btn">프로젝트 생성</button>
            <button className="cancel-btn">취소</button>
          </div>
        </form>
      </Wrap>
    </>
  );
};

export default projectCreate;

const Wrap = styled.div`
  padding: 0 30px 0 260px;
`;
