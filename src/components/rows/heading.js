import './style.css'

const Heading = (props) => {
  return (
    <div className='settings-header'>
      <p>{props.title}</p>
    </div>
  )
}

export default Heading
