import { Row, Col, Image, Space } from 'antd'
import { withTranslation } from 'next-i18next'
import { Slide } from 'react-awesome-reveal'
import { MiddleBlockSection, ImageCard, Content, MemberName } from './styles'

const teamMembes = [
  { image: '/img/svg/1.png', name: 'Gosho', title: 'Designer' },
  { image: '/img/svg/3.png', name: 'Pesho', title: 'Director' },
  { image: '/img/svg/7.png', name: 'Ivan', title: 'Marketing' },
  { image: '/img/svg/15.png', name: 'Zlatan', title: 'The developer' },
]

interface TeamMembersBlockTypes {
  title: string
  t: any
}

const TeamMembersBlock = ({ title, t }: TeamMembersBlockTypes) => {
  return (
    <MiddleBlockSection>
      <Row
        justify="center"
        align="middle"
        gutter={{ xs: 0, sm: 0, md: 20, lg: 20 }}
      >
        <Col lg={24} md={24} sm={24} xs={24}>
          <h6>{t(title)}</h6>
        </Col>

        {teamMembes.map((member) => {
          return (
            <Col lg={6} md={6} sm={12} xs={24} key={member.image}>
              <Space size={20}>
                <ImageCard key={member.image}>
                  <Image src={member.image} />
                  <MemberName>{member.name}</MemberName>
                  <Content>{member.title}</Content>
                </ImageCard>
              </Space>
            </Col>
          )
        })}
      </Row>
    </MiddleBlockSection>
  )
}

export default withTranslation()(TeamMembersBlock)
