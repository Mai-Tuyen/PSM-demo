import React, { useState } from "react";
import { Row, Col, Card, Button, DatePicker, Segmented } from "antd";
import SideMenuTimeLine from "../../components/TimeLine/SideMenuTimeLine/SideMenuTimeLine";
import TimeLineContent from "../../components/TimeLine/TimeLineContent/TimeLineContent";
import "./index.less";
const { RangePicker } = DatePicker;

const TimeLine = () => {
  const [viewType, setViewType] = useState();
  let timeLineHeader = (
    <div className="timeline__header">
      <Button type="primary">Scheduling</Button>
      <div className="timeline__header__right">
        <span className="timeline__header__right__text">
          <img
            className="sortby__icon"
            src="/images/sortby_icon.svg"
            alt="sortby_icon"
          />{" "}
          Sort by
        </span>
        <Segmented
          className="timeline__header__right__text viewType"
          options={["Days", "Weeks", "Months"]}
        />
        <span className="timeline__header__right__daterange">
          <RangePicker />
        </span>
      </div>
    </div>
  );
  return (
    <div className="timeline">
      <Card title={timeLineHeader}>
        <Row>
          <Col span={6}>
            <SideMenuTimeLine />
          </Col>
          <Col span={18}>
            <TimeLineContent />
          </Col>
        </Row>
      </Card>
      <Row>
        <div className="timeline__description">
          <span className="timeline__description__item timeline__description__item--pending">
            Cancelled/Pending
          </span>
          <span className="timeline__description__item timeline__description__item--overdue">
            Overdue
          </span>
          <span className="timeline__description__item timeline__description__item--ontrack">
            Ontrack
          </span>
          <span className="timeline__description__item timeline__description__item--offtrack">
            Offtrack
          </span>
        </div>
      </Row>
      <Row>
        <div className="timeline__footer">
          <div className="timeline__footer__button">
            <Button className="timeline__footer__button--cancel">Cancel</Button>
            <Button type="primary">Save</Button>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default TimeLine;
