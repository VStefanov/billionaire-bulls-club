import { ContainerWithBackground as Container } from './styles'
import { ContainerWithBackgroundProps } from '../types'

const ContainerWithBackground = ({
  children,
}: ContainerWithBackgroundProps) => (
  <Container image="img/bull.svg">{children}</Container>
)

export default ContainerWithBackground
