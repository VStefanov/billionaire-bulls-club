import IntroContent from '../content/IntroContent.json'
import NFTContent from '../content/NFTContent.json'
import MiddleBlockContent from '../content/MiddleBlockContent.json'
import RoadmapConent from '../content/RoadmapContent.json'
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
import Header from '../components/Header'
import React from 'react'
import Footer from '../components/Footer'

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
          type="carousel"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="developer.svg"
          id="intro"
        />
        <MiddleBlock
          title={RoadmapConent.title}
          content={RoadmapConent.text}
          button={RoadmapConent.button}
          contentWrapper={false}
        />
        <ContentBlock
          type="right"
          title={NFTContent.title}
          content={NFTContent.text}
          icon="non-fungible-token.png"
          id="intro"
        />
        {/* <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        /> */}
        {/* <MiddleBlock
          title={'Something else that Might Be cool'}
          content={
            'because otherwise we have two pieces with text on the right'
          }
          button={RoadmapConent.button}
          contentWrapper={false}
        /> */}
        <ContentBlock
          type="collapse"
          title={MissionContent.title}
          icon="product-launch.svg"
          id="mission"
        />
        {/* <ContentBlock
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
        /> */}
      </Container>
      <Footer />
    </>
  )
}

export default Home
