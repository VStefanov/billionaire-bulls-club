import { Row, Col } from 'antd'
import { withTranslation } from 'next-i18next'
import { Slide } from 'react-awesome-reveal'
import { Button } from '../../common/Button'
import { MiddleBlockSection, Content, ContentWrapper } from './styles'

interface MiddleBlockProps {
  title: string
  content: string
  button: string
  t: any
  contentWrapper?: boolean
}

const MiddleBlock = ({
  title,
  content,
  button,
  t,
  contentWrapper = true,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ConditionalWrapper
            condition={contentWrapper}
            wrapper={(children) => <ContentWrapper>{children}</ContentWrapper>}
          >
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo('mission')}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ConditionalWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  )
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default withTranslation()(MiddleBlock)
