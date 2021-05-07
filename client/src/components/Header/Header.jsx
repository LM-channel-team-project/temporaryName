import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>temporaryName</h1>
      <div className="option">
        <div className="login">
          <Link to="/login">로그인</Link>
        </div>
        <div className="register">
          <Link to="/register">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
