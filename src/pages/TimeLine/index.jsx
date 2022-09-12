import React from "react";
import { Row, Col, Card, Button, DatePicker } from "antd";
import SideMenuTimeLine from "../../components/TimeLine/SideMenuTimeLine/SideMenuTimeLine";
import TimeLineContent from "../../components/TimeLine/TimeLineContent/TimeLineContent";
import "./index.less";
const { RangePicker } = DatePicker;

const TimeLine = () => {
  let timeLineHeader = (
    <div className="timeline__header">
      <Button type="primary">Scheduling</Button>
      <div className="timeline__header__right">
            <span className="timeline__header__right__text">Sort by</span>
            <span className="timeline__header__right__text">Days</span>
            <span className="timeline__header__right__text">Weeks</span>
            <span className="timeline__header__right__text">Months</span>
            <span className="timeline__header__right__daterange"><RangePicker/></span>
      </div>
    </div>
  );
  return (
    <>
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
    </>
  );
};

export default TimeLine;
