import Heading from './heading'

const SectionWrapper = (props) => (
  <div style={{ display: 'flex', flex: '0 0 100%', flexWrap: 'wrap' }}>
    <Heading title={props.title} />
    {props.children}
  </div>
)

export default SectionWrapper
