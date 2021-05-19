import React from "react";

import { Link } from "react-router-dom";

import "./Article.css";

function Article() {
  const onClickSettingHandler = () => {
    const menu = document.querySelector(".setting-menu");
    menu.classList.toggle("active");
  };

  const onBlurSettingHandler = () => {
    const menu = document.querySelector(".setting-menu");
    // menu.classList.remove("active");
    // blur사용 시 아무것도 안됨
  };

  return (
    <div className="article">
      <div className="article-top">
        <div className="user-info">
          <div className="avatar">
            <i className="fas fa-user"></i>
          </div>
          <div>
            <span className="user-name">USER NAME</span>
            <small className="create-date">create date</small>
          </div>
        </div>
        <div className="status">
          <div className="board-count">
            <i className="fas fa-comment"></i>0
          </div>
          <div className="board-count">
            <i className="fas fa-eye"></i>0
          </div>
        </div>
      </div>
      <div className="article-title">
        <span className="update"></span>
        <h1>css가 안 먹히는 거 같습니다.</h1>
      </div>
      <div className="article-content">
        css가 안 먹히는 거 같습니다.
        <div className="setting">
          <button onClick={onClickSettingHandler} onBlur={onBlurSettingHandler}>
            <i className="fas fa-cog"></i>
          </button>
          <ul className="setting-menu">
            <li>
              <Link to="/write">
                <i className="fas fa-edit"></i>수정하기
              </Link>
            </li>
            <li>
              <i className="fas fa-trash-alt"></i>삭제하기
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Article;
