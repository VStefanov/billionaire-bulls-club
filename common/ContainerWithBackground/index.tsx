import { ContainerWithBackground as Container } from './styles'
import { ContainerWithBackgroundProps } from '../types'

const ContainerWithBackground = ({
  children,
}: ContainerWithBackgroundProps) => (
  <Container image="img/cheeky.jpeg">{children}</Container>
)

export default ContainerWithBackground
