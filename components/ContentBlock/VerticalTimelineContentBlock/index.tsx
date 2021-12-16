import { TwitterOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MiddleBlockSection } from './styles'

const VerticalTimelineComponent = ({ title }: { title: string }) => {
  return (
    <MiddleBlockSection>
      <Row justify="center" align="middle">
        <Col lg={24} md={24} sm={24} xs={24}>
          <h6>{title}</h6>
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: 'black',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: 'black',
              }}
              date="2010 - 2011"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: '#fff',
              }}
              date="2008 - 2010"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: 'black',
              }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: 'black',
              }}
              date="April 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: 'black' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={
                <TwitterOutlined
                  style={{ fontSize: '30px', color: 'white' }}
                  className="ant-list-item"
                />
              }
            />
          </VerticalTimeline>
        </Col>
      </Row>
    </MiddleBlockSection>
  )
}

export default VerticalTimelineComponent
