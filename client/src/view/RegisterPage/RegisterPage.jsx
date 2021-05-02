import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_actions";

function RegisterPage(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onIdHandler = (e) => {
    setLogin(e.currentTarget.value);
  };
  const onPwHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const submitRegister = () => {
    const data = {
      id: login,
      pw: password,
    };
    dispatch(registerUser(data))
      .then((response) => {
        console.log(response);
        if (response.payload.registerSuccess) {
          props.history.push("/");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((err) => alert("로그인 실패"));
  };
  return (
    <div>
      <h1>REGISTER PAGE</h1>
      <h3>id</h3>
      <input type="text" onChange={onIdHandler} />
      <br />
      <h3>pw</h3>
      <input type="password" onChange={onPwHandler} />
      <br />
      <button onClick={submitRegister}>register</button>
    </div>
  );
}

export default withRouter(RegisterPage);
