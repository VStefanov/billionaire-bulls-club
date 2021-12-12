import { Row, Col, Collapse } from 'antd'
import { withTranslation } from 'next-i18next'
import { ContentBlockProps } from '../types'

import { ContentWrapper, MiddleBlockSection } from './styles'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const { Panel } = Collapse
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const CollapseContentBlock = ({
  title,
  t,
  contentWrapper = true,
}: ContentBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="right">
        <Row justify="center" align="middle">
          <ConditionalWrapper
            condition={contentWrapper}
            wrapper={(children) => <ContentWrapper>{children}</ContentWrapper>}
          >
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
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
          </ConditionalWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  )
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default withTranslation()(CollapseContentBlock)
