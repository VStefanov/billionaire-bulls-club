import { Row } from 'antd'
import { withTranslation } from 'next-i18next'
import { SvgIcon } from '../../common/SvgIcon'
import Container from '../../common/Container'

import { NavLink, Extra, LogoContainer, FooterContainer } from './styles'

interface SocialLinkProps {
  href: string
  src: string
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    )
  }

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: '3rem' }}
          >
            <NavLink href="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  )
}

export default withTranslation()(Footer)
