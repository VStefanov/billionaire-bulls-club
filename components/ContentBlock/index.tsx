import LeftContentBlock from './LeftContentBlock'
import RightContentBlock from './RightContentBlock'
import CarouselContentBlock from './CarouselContentBlock'
import CollapseContentBlock from './CollapseContentBlock'
import { ContentBlockProps } from './types'

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === 'left') return <LeftContentBlock {...props} />
  if (props.type === 'right') return <RightContentBlock {...props} />
  if (props.type === 'carousel') return <CarouselContentBlock {...props} />
  if (props.type === 'collapse') return <CollapseContentBlock {...props} />
  return null
}

export default ContentBlock
