import { Row, Col, Carousel } from 'antd'
import { withTranslation } from 'next-i18next'
import { ContentBlockProps } from '../types'
import { Fade } from 'react-awesome-reveal'
import {
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  CarouselItem,
} from './styles'
import { SvgIcon } from '../../../common/SvgIcon'
import React from 'react'
const colors = {
  0: '#7a8577',
  1: '#252f5d',
  2: '#f3bc2d',
  3: '#7a8577',
  4: '#252f5d',
  5: '#f3bc2d',
}
const CarouselContentBlock = ({
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <div>
      <Row justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
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
        <Col lg={11} md={11} sm={11} xs={24}>
          <Carousel
            // autoplay
            dotPosition="bottom"
            afterChange={(e) => {
              // document.body.style.backgroundColor = colors[e]
              document.body.style.transition = '0.5s'
            }}
          >
            <CarouselItem src="/img/svg/1.png" />
            <CarouselItem src="/img/svg/3.png" />
            <CarouselItem src="/img/svg/7.png" />
            <CarouselItem src="/img/svg/10.png" />
            <CarouselItem src="/img/svg/15.png" />
            <CarouselItem src="/img/svg/16.png" />
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default withTranslation()(CarouselContentBlock)
