import React, { useState } from "react";
import PropTypes from 'prop-types'; 

export default function TextForm(props) {
 
  const handleOnChange = (event)=>{
    setText(event.target.value);

  }

  const handleUpClick=()=>{
    let newText=text.toUpperCase(); 
    setText(newText);
    props.Showalert("Covert to Upper case","success");
    
  }
  const handleClearClick=()=>{
    let newText=""; 
    setText(newText);
    props.Showalert("Clear the text","success"); 
  }
  const handleSortClick = () => {
    const wordsArray = text.split(/\s+/);
    wordsArray.sort();
    const newText = wordsArray.join(' ');
    setText(newText);
    props.Showalert("Sort the text","success"); 
  }
  
  const handleDownClick=()=>{
    let newText=text.toLowerCase(); 
    setText(newText);
    props.Showalert("Covert to Lower case","success");
    
    
  }
  const handleCopyClick=()=>{
    let newText=document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value)
    props.Showalert("Copy the text","success");
  }
  /*const handleRemoveExtraSpace=()=>{
    let text=document.getElementById("myBox");
    let newText=text.split(/[]+/);
    setText(newText.join(" "));
  }*/

  //Create useState hook
  const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <div className='mb-3 my-5'>
        <h1>{props.title} </h1>
        <textarea className="form-control" id="myBox" value={text} placeholder="Enter Text Here" onChange={handleOnChange}  rows="6" style={{background:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
      </div>
      <div>
      <button type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to upper case</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to lower case</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handleSortClick}>Sort Text</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handleCopyClick}>CopyText</button>
    {/*  <button type="button" className="btn btn-primary mx-3" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>*/}
      </div>
      <div className='container my-3' >
        <h3>Text Sammary Here</h3>
        <p>{text.split(" ").length}word and {text.length} character</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>

    </div>
      
    </div>
   
    </>
  );
  
}

TextForm.propTypes = { title: PropTypes.string };
