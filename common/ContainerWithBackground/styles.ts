import styled from 'styled-components'

export const ContainerWithBackground = styled('div')<any>`
  position: relative;
  width: 100%;
  background-repeat: repeat-y;
  background-size: cover;
  min-height: 800px;
  background-image: ${(p) => (p.image ? `url("${p.image}");` : '')};
  margin-bottom: 7rem;
`
