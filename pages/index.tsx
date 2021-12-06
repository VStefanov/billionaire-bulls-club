import IntroContent from '../content/IntroContent.json'
import MiddleBlockContent from '../content/MiddleBlockContent.json'
import AboutContent from '../content/AboutContent.json'
import MissionContent from '../content/MissionContent.json'
import ProductContent from '../content/ProductContent.json'
import ContactContent from '../content/ContactContent.json'

import Contact from '../components/ContactForm'
import MiddleBlock from '../components/MiddleBlock'
import Container from '../common/Container'
import ContainerWithBackground from '../common/ContainerWithBackground'
import ScrollToTop from '../common/ScrollToTop'
import ContentBlock from '../components/ContentBlock'
import Header from '../components/header'
import React from 'react'

const Home = () => {
  return (
    <>
      <ContainerWithBackground>
        <Header />
        <Container>
          <MiddleBlock
            title={MiddleBlockContent.title}
            content={MiddleBlockContent.text}
            button={MiddleBlockContent.button}
          />
        </Container>
      </ContainerWithBackground>
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="developer.svg"
          id="intro"
        />

        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          type="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
    </>
  )
}

export default Home
