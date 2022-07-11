import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpCLick = () =>{
     //   console.log("Uppercase button clicked "+text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }

    const handleLoCLick = () =>{
      //   console.log("Uppercase button clicked "+text)
         let newText = text.toLowerCase()
         setText(newText)
         props.showAlert("Converted to lower case", "success")
     }

     const handleClearClick = () =>{
      //   console.log("Uppercase button clicked "+text)
      let newText = ''
      setText(newText)
      props.showAlert("Text box cleared ", "success")
     }

    const onChangeHandle = (event) =>{
    //    console.log("Hanlde changedd")
        setText(event.target.value)
    }

  const [text, setText] = useState('');  
  return (
    <>    
      <div className='container' style={{color:props.mode==='dark'?'4e4ec3':'black'}}>
          <h1>{props.heading}</h1>    
          <div className="mb-3">
          {/* <label forname="myBox" className="form-label"> </label> */}
          <textarea className="form-control" value={text} style={{background:props.mode==='dark'?'grey':'white'}} onChange={onChangeHandle} id="myBox" rows="8"></textarea>
          </div>        
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCLick}>Convert to upper case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoCLick}>Convert to lower case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your word summary </h1>
        <p>{text.split(' ').filter((element)=>{return element.length!=0}).length} words {text.length} character </p>
        <p>{0.008 * text.split(' ').length} minutes required to read</p>
        <p>{text.split(' ').length-1} Space in text </p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to preview"}</p>
      </div>
    </>
  )
}
