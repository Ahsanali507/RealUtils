import React,{useState} from 'react'

export default function Textarea(props) {
    const [text, settext] = useState("");

    const [btnchangeText, setbtnchangeText] = useState("Change to Uppercase");

    const changetext=()=>{
        if(btnchangeText==='Change to Uppercase'){
            settext(text.toUpperCase());
            setbtnchangeText("Change to Lowercase");
            props.showalert('Text is converted into uppercase','successfully');
        }
        else{
            settext(text.toLowerCase());
            setbtnchangeText("Change to Uppercase");
            props.showalert('Text is converted into lowercase','successfully');
        }
    }

    // const clicktolowercase=()=>{
    //     let newText=text.toLowerCase();
    //     settext(newText);
    // }

    const eventhandle=(event)=>{
        settext(event.target.value);
    }

    const cleartext=()=>{
        settext('');
        props.showalert('Text is cleared','successfully');
    }

    const copytext=()=>{
        var txtarea=document.getElementById('floatingTextarea');
        txtarea.select();
        navigator.clipboard.writeText(txtarea.value);
        // document.getSelection().removeAllRanges();       // jb hum copy krte hain to text select ho jata hai lihaza ye oose remove krta hai
        props.showalert('Text is copied to clipboard','successfully');
    }

    const handleExtraSpace=()=>{
        let newtxt=text.split(/[ ]+/);
        settext(newtxt.join(" "));
        props.showalert('Extra spaces are removed','successfully');
    }

    // const startTime=()=>{ 

    //         let currentTime=new Date();
        
    //         // let currentDay=currentTime.getDay();
    //         // currentDay=(currentDay<10 ? '0' : '') + currentDay;
    //         // document.getElementById('days').innerHTML=currentDay;
        
    //         // let currentHours=currentTime.getHours();
    //         // currentHours=(currentHours<10 ? '0' : '') + currentHours;
    //         // currentHours=(currentHours>12) ? currentHours-12 : currentHours;
    //         // currentHours=(currentHours==0) ? 12 : currentHours;
    //         // document.getElementById('hours').innerHTML=currentHours;
        
    //         let minutes=currentTime.getMinutes();
    //         minutes=(minutes<10 ? '0' : '') + minutes;
    //         document.getElementById('minutes').innerHTML=minutes;
        
    //         let seconds=currentTime.getSeconds();
    //         seconds=(seconds<10 ? '0' : '') + seconds;
    //         document.getElementById('seconds').innerHTML=seconds;

    //         let miliSeconds=currentTime.getMilliseconds();
    //         document.getElementById('miliseconds').innerHTML=miliSeconds;
    // }

//     const endTime=()=>{
//         let currentTime=new Date();

//         let minutes=currentTime.getMinutes();
//         document.getElementById('minutes').innerHTML=0*minutes;
    
//         let seconds=currentTime.getSeconds();
//         document.getElementById('seconds').innerHTML=0*seconds;

//         let miliSeconds=currentTime.getMilliseconds();
//         document.getElementById('miliseconds').innerHTML=0*miliSeconds;
// }

  return (
    <>
    <div className='container my-1'>
        <p><strong>Time Counter</strong></p>
        <p><b id='minutes'>00</b> : <b id='seconds'>00</b> : <b id='miliseconds'>00</b></p>
        <hr />
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        <div className="form-floating">  
        <textarea className="form-control" value={text} onChange={eventhandle} style={{height:'100px'}} id="floatingTextarea"></textarea><br />
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={changetext}>{btnchangeText}</button>
        {/* <button className="btn btn-success mx-2" onClick={clicktolowercase}>Change To Lowercase</button> */}
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={cleartext}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={copytext}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpace}>Remove Extraspaces</button>
        {/* <button className="btn btn-success mx-2" onLoad={endTime}>Start</button>
        <button className="btn btn-success mx-2" onClick={startTime}>End</button> */}
        </div>
    </div>
    <hr />
    <div className="container my-4">
        <h2>Your Text Summary:</h2>
        <p><b>Words: </b>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} And <b>Characters: </b>{text.length}</p>
        <p>You take about <b>{0.008*text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</b> minutes to read your text</p>
        <hr />
        <h3>Preview</h3>
        <p>{text.length!==0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
