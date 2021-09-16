const Heading = (props) => {
  return (
    <div
      style={{
        flex: '0 0 100%',
        minHeight: '20px',
        backgroundColor: '#424242',
        color: '#d9d9d9',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '8px 10px',
        fontWeight: 'bold',
        fontSize: '13px',
      }}
    >
      <p
        style={{
          margin: 0,
          flex: '1 0 70%',
        }}
      >
        {props.title}
      </p>
    </div>
  )
}

export default Heading
