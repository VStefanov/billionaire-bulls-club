import React, { useState } from 'react'
import { Row, Col, Drawer } from 'antd'
import { withTranslation } from 'next-i18next'
import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Container from '../../common/Container'
import { SvgIcon } from '../../common/SvgIcon'
import { Button } from '../../common/Button'
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  CustomNavLinkSocial,
  Label,
  Outline,
  Span,
} from './styles'

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false)

  const showDrawer = () => {
    setVisibility(!visible)
  }

  const onClose = () => {
    setVisibility(!visible)
  }

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement
      element.scrollIntoView({
        behavior: 'smooth',
      })
      setVisibility(false)
    }
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo('about')}>
          <Span>{t('About')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('roadmap')}>
          <Span>{t('Roadmap')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('faq')}>
          <Span>{t(`FAQ'S`)}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('team')}>
          <Span>{t(`TEAM`)}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Span></Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: '180px' }}
          onClick={() => scrollTo('contact')}
        >
          <Span>
            <Button>{t('Join Discord')}</Button>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSocial>
          <Link href="https://www.instagram.com/">
            <InstagramOutlined
              style={{ fontSize: '30px' }}
              className="ant-list-item"
            />
          </Link>
        </CustomNavLinkSocial>
        <CustomNavLinkSocial>
          <Link href="https://www.twitter.com/">
            <TwitterOutlined
              style={{ fontSize: '30px' }}
              className="ant-list-item"
            />
          </Link>
        </CustomNavLinkSocial>
      </>
    )
  }

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer>
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: '2.5rem' }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  )
}

export default withTranslation()(Header)
