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
      <Slide direction="left">
        <Row justify="center" align="middle">
          <Col lg={24} md={24} sm={24} xs={24}>
            <h6>{t(title)}</h6>
          </Col>
          <Space size={20}>
            {teamMembes.map((member) => {
              return (
                // <Col lg={6} md={6} sm={6} xs={6} key={member.image}>
                <ImageCard key={member.image}>
                  <Image src={member.image} />
                  <MemberName>{member.name}</MemberName>
                  <Content>{member.title}</Content>
                </ImageCard>
                // </Col>
              )
            })}
          </Space>
        </Row>
      </Slide>
    </MiddleBlockSection>
  )
}

export default withTranslation()(TeamMembersBlock)
