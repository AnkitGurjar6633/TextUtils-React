import React,{useState} from 'react'

export default function TextForm(props) {
  
  const [text,setText] = useState('');

  const handleChange = (event) => {
      setText(event.target.value);
  }

  const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Converted to UpperCase!', 'success');
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase!', 'success');
  }
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text is Cleared!', 'success');
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text is to Copied to Clipboard!', 'success');
  }

  const countWords = () => {
    let words = text.split(" ");
    let count = words.length;
    for(let i in words){
      if(words[i] === ""){
        count--;
      }
    }
    return count;
  }
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder='Enter Text Here' style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#212529'}} value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{countWords()} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
