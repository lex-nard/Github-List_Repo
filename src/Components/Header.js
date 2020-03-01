import React from "react";

function Header(props) {
  const hasError = Boolean(props.error);
  const style = {};

  if (hasError) {
    style.border = "1px solid red";
  }

  return (
    <div>
      <h1> Procure um usuário do Github e veja seus repositórios</h1>
      <input
        data-test="entrada"
        onChange={props.handleChange}
        style={style}
        type="text"
        value={props.value}
        onKeyPress={props.onKeyPress}
      ></input>
      <p>{props.error}</p>
    </div>
  );
}

export default Header;
