import IntroContent from '../content/IntroContent.json'
import NFTContent from '../content/NFTContent.json'
import MiddleBlockContent from '../content/MiddleBlockContent.json'
import RoadmapConent from '../content/RoadmapContent.json'
import MissionContent from '../content/MissionContent.json'
import MiddleBlock from '../components/MiddleBlock'
import Container from '../common/Container'
import ContainerWithBackground from '../common/ContainerWithBackground'
import ScrollToTop from '../common/ScrollToTop'
import ContentBlock from '../components/ContentBlock'
import Header from '../components/Header'
import React from 'react'
import Footer from '../components/Footer'
import TeamMembersBlock from '../components/ContentBlock/TeamMembersBlock'
import VerticalTimelineComponent from '../components/ContentBlock/VerticalTimelineContentBlock'

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
        <VerticalTimelineComponent title="Roadmap" />
        <ContentBlock
          type="right"
          title={NFTContent.title}
          content={NFTContent.text}
          icon="non-fungible-token.png"
          id="intro"
        />

        <ContentBlock
          type="collapse"
          title={MissionContent.title}
          icon="product-launch.svg"
          id="mission"
        />
        <TeamMembersBlock title="Team members" />
      </Container>
      <Footer />
    </>
  )
}

export default Home
