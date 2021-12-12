import { ContainerWithBackground as Container } from './styles'
import { ContainerWithBackgroundProps } from '../types'

const ContainerWithBackground = ({
  children,
}: ContainerWithBackgroundProps) => (
  <Container image="img/svg/Banner.png">{children}</Container>
)

export default ContainerWithBackground
