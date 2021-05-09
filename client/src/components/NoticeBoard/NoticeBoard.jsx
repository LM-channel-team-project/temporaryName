import React from "react";
import { Link } from "react-router-dom";

import "./NoticeBoard.css";

function NoticeBoard() {
  return (
    <div className="notice-board">
      <div className="notice-board-top">
        <div className="notice-board-top-left">
          <div className="notice-number">번호</div>
          <div className="notice-title">제목</div>
        </div>
        <div className="notice-board-top-right">
          <div className="notice-writer">글쓴이</div>
          <div className="notice-date">날짜</div>
          <div className="notice-active-num">조회 수</div>
        </div>
      </div>
      <div className="notice-board-middle">
        <ul className="notice-board-list">
          {/* json */}
          <li className="notice-board-item">
            <div className="notice-number">1</div>
            <div className="notice-title">
              <span className="title-before update">업데이트</span>css가 안
              먹히는 거 같습니다.
              <span className="title-after up"></span>
            </div>
            <div className="notice-writer">moguri846</div>
            <div className="notice-date">1 일전</div>
            <div className="notice-active-num">1</div>
          </li>
          <li className="notice-board-item">
            <div className="notice-number">2</div>
            <div className="notice-title">
              <span className="title-before idea-suggestion">
                아이디어 제안
              </span>
              css가 안 먹히는 거 같습니다.
              <span className="title-after new"></span>
            </div>
            <div className="notice-writer">moguri846</div>
            <div className="notice-date">1 일전</div>
            <div className="notice-active-num">1</div>
          </li>
          <li className="notice-board-item">
            <div className="notice-number">3</div>
            <div className="notice-title">
              <span className="title-before question">문의</span>css가 안 먹히는
              거 같습니다.
              <span className="title-after new"></span>
            </div>
            <div className="notice-writer">moguri846</div>
            <div className="notice-date">1 일전</div>
            <div className="notice-active-num">1</div>
          </li>
          <li className="notice-board-item">
            <div className="notice-number">4</div>
            <div className="notice-title">
              <span className="title-before error-report">오류 제보</span>css가
              안 먹히는 거 같습니다.
              <span className="title-after new"></span>
            </div>
            <div className="notice-writer">moguri846</div>
            <div className="notice-date">1 일전</div>
            <div className="notice-active-num">1</div>
          </li>
          {/* json */}
        </ul>
      </div>
      <div className="notice-board-bottom">
        <div className="notice-board-bottom-top">
          <div className="notice-board-bottom-top-left">
            <div className="list">목록</div>
            <div className="filter">필터</div>
            <div className="tag">태그</div>
          </div>
          <div className="notice-board-bottom-top-right">
            <Link to="writing">
              <i className="fas fa-pen"></i>
              글쓰기
            </Link>
          </div>
        </div>
        <div className="notice-board-bottom-bottom">
          <div className="first">처음</div>
          <div className="prev">이전</div>
          <ul className="page-list">
            <li className="page-num">1</li>
          </ul>
          <div className="next">다음</div>
          <div className="last">마지막</div>
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;
