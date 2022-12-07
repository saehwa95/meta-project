import Accordion from "react-bootstrap/Accordion";
import Toggle from "../../css/elements/Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import "../../css/components/contents/contentDetail.css";

function ContentDetail() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>VOD 영상</Accordion.Header>
        <Accordion.Body>
          <div className="detail-setting">
            <div className="left-setting">추가된 VOD 리스트</div>
            <div className="right-setting">
              <Toggle />
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{ backgroundColor: "#808080" }}>
          스트리밍 영상
        </Accordion.Header>
        <Accordion.Body>
          <div className="detail-setting">
            <div className="left-setting">스트리밍리스트</div>
            <div className="right-setting">
              <Toggle />
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ContentDetail;
