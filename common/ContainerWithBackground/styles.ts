import styled from 'styled-components'

export const ContainerWithBackground = styled('div')<any>`
  position: relative;
  width: 100%;
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center center;
  background-image: ${(p) => (p.image ? `url("${p.image}");` : '')};
  min-height: 800px;
  @media only screen and (max-width: 890px) {
    min-height: inherit;
  }
  margin-bottom: 7rem;
`
