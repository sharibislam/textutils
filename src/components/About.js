  import React, {useState} from 'react'

  export default function About() {

      const [myStyle, setMyStyle]= useState({
          color : 'white',
          backgroundColor: 'black'
          
      })

      const[btntext, setBtnText] = useState("Enable ligh mode")

      const toggleStyle = ()=>{
          if(myStyle.color ==='white'){
              setMyStyle({
                  color : 'black',
              backgroundColor: 'white',
              
              })
              setBtnText("Enable dark mode")
              
          } else{
              setMyStyle({
                  color : 'white',
              backgroundColor: 'black',
              })
              setBtnText("Enable light mode")
          }
      }

    return (
      <div className="container">
          <h1>About us</h1>
          <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Anlyz your text</strong>
        </button>
      </h2>
      <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          You can Anlyz your text using textutil portal.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Text util is free to use and it's all for commutnity
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser campatibale</strong>
        </button>
      </h2>
      <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Textutil is browser compatible and device browser compatible as well. You can use on any browser inclduing mobile browser as well
        </div>
      </div>
    </div>
  </div>
  <div className='container my-2'>
      <button onClick={toggleStyle} className="btn btn-primary" type="button">{btntext}</button>
  </div>
  </div>
    )
  }
