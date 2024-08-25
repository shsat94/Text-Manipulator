import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowerClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange = (evt) => {

        setText(evt.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);

        props.showAlert("Copied successfully","success");
    }
    const handleExtraSpace = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClearText = () => {
        setText("");
    }

    
    return (
        <>
            <div className='container'>
                <h1 style={{color:props.mode==='dark'?'white':'#042743'} }>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'} }onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowerClick}>Convert to lower Case</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpace}>Clear Extra Space</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'} }>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview'}</p>
            </div>
        </>
    )
}