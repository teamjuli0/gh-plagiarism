import Heading from './heading'

const SectionWrapper = (props) => (
  <div className='section-wrapper'>
    <Heading title={props.title} />
    {props.children}
  </div>
)

export default SectionWrapper
