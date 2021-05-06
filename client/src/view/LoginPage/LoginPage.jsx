import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_actions";

function LoginPage(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onIdHandler = (e) => {
    setLogin(e.currentTarget.value);
  };
  const onPwHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const submitLogin = () => {
    const data = {
      email: login,
      password: password,
    };
    dispatch(loginUser(data))
      .then((response) => {
        console.log(response);
        if (response.payload.loginSuccess) {
          props.history.push("/");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((err) => alert("로그인 실패"));
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <h3>id</h3>
      <input type="text" onChange={onIdHandler} />
      <br />
      <h3>pw</h3>
      <input type="password" onChange={onPwHandler} />
      <br />
      <button onClick={submitLogin}>로그인</button>
    </div>
  );
}

export default withRouter(LoginPage);
