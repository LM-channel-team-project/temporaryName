import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { createBoardUser } from "../../_actions/user_actions.js";

import "./Write.css";

const Category = [
  { key: 1, value: "카테고리를 선택해 주세요." },
  { key: 2, value: "업데이트" },
  { key: 3, value: "아이디어 제안" },
  { key: 4, value: "문의" },
  { key: 5, value: "오류 제보" },
];
function Write(props) {
  const [category, setCategory] = useState("1");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const onTitleHandler = (e) => {
    setTitle(e.currentTarget.value);
  };
  const onCategoryHandler = (e) => {
    setCategory(e.currentTarget.value);
  };

  const onNoteHandler = (e) => {
    setNote(e.currentTarget.value);
  };

  const onCancelHandler = () => {
    var result = window.confirm("정말로 취소하시겠습니까?");
    if (result) {
      props.history.push("/");
    }
  };
  // 다른 파일로 옮겨야 함
  const checkCategory = () => {
    if (category === "1") {
      return false;
    }
    return true;
  };

  const checkTitle = () => {
    if (title === "") {
      return false;
    }
    return true;
  };

  const checkNote = () => {
    if (note === "") {
      return false;
    }
    return true;
  };

  const checkSubmit = () => {
    let check = checkCategory() && checkTitle() && checkNote();
    if (!check) {
      alert("모든 곳에 입력 해주세요.");
    } else {
      onSubmit();
    }
  };
  // 다른 파일로 옮겨야 함

  const onSubmit = () => {
    const data = {
      category,
      title,
      description: note,
    };
    dispatch(createBoardUser(data)).then(({ data }) => {
      if (data.success) {
        alert(data.message);
        props.history.push("/");
      } else {
        alert("게시글 업로드를 실패했습니다.");
      }
    });
  };

  return (
    <div className="writing">
      <div className="writing-header">
        <h1>글 쓰기</h1>
      </div>
      <div className="writing-content">
        <select
          name="category"
          id="category-select"
          value={category}
          onChange={(e) => {
            onCategoryHandler(e);
            checkCategory();
          }}
        >
          {Category.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <input
          className="writing-title"
          type="text"
          value={title}
          onChange={(e) => {
            onTitleHandler(e);
            checkTitle();
          }}
          placeholder="제목을 입력해 주세요."
        />
        <textarea
          name="writing-note"
          id="writing-note"
          value={note}
          onChange={(e) => {
            onNoteHandler(e);
            checkNote();
          }}
        ></textarea>
      </div>
      <div className="writing-footer">
        <div className="buttons">
          <button className="cancel" onClick={onCancelHandler}>
            취소
          </button>
          <button className="create" onClick={checkSubmit}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Write);
