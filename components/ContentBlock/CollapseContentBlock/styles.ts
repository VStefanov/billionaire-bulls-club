import { Carousel } from 'antd'
import styled from 'styled-components'

export const ContentWrapper = styled('div')`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`

export const Content = styled('p')`
  margin: 1.5rem 0 2rem 0;
`

export const ServiceWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`

export const MinTitle = styled('h6')`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: 'Motiva Sans Light', sans-serif;
`

export const MinPara = styled('p')`
  font-size: 13px;
`

export const CarouselItem = styled('h3')`
  height: 160px;
  color: #364d79
  line-height: 160px;
  text-align: center;
`
export const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: red;
  }
  > .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: red;
  }
`
