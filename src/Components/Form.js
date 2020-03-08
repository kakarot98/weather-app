import React from "react";

const buttonStyle = {
  color:"blue",
  fontStyle:"italic"
  
}

function Form(props){
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City.."></input>
      <br />
      <input type="text" name="country" placeholder="Country.."></input>
      <br /><br/>
      <button style={buttonStyle}>Get Weather</button>
    </form>
  );
}

export default Form;
