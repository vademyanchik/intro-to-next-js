const Css = () => (
  <div>
    <p style={{ color: 'blue'}}>inline style</p>
    <p className='test'> styled-jsx </p> 
    <style jsx>{`
      .test {
        color: green;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
)

export default Css;
