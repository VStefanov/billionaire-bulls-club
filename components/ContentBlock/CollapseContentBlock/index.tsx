import { Row, Col, Collapse } from 'antd'
import { withTranslation } from 'next-i18next'
import { ContentBlockProps } from '../types'
import { Fade } from 'react-awesome-reveal'
import {
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from './styles'
import { SvgIcon } from '../../../common/SvgIcon'
import React from 'react'

const { Panel } = Collapse
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const CollapseContentBlock = ({
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <div>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={9} md={9} sm={12} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              {content && <Content>{t(content)}</Content>}
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === 'object' &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      )
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={13} md={13} sm={11} xs={24}>
            <Collapse accordion>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Fade>
    </div>
  )
}

export default withTranslation()(CollapseContentBlock)
