import React from 'react'

function Alert(props) {

  const capitalize=(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }

  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className="alert alert-success alert-dismissible fade-show">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type='button' className="btn-close" data-bs-dismiss='alert' aria-label='close'></button>
    </div>}
    </div>
  )
}

export default Alert
