import React from 'react';

function Button(props) {
  return (
    <>
      <button onClick={props.togglePic}> {props.icons}</button>  
    </>
  );
}

export default Button;