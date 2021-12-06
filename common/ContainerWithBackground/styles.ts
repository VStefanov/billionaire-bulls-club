import styled from 'styled-components'

export const ContainerWithBackground = styled('div')<any>`
  position: relative;
  width: 100%;
  min-height: 800px;
  background-image: ${(p) => (p.image ? `url("${p.image}");` : '')};
`
