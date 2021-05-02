import React from "react";

import Header from "../../components/Header/Header.jsx";
import NoticeBoard from "../../components/NoticeBoard/NoticeBoard.jsx";

function MainPage() {
  return (
    <div>
      <>
        <Header />
      </>
      <div className="content">
        <NoticeBoard />
      </div>
    </div>
  );
}

export default MainPage;
