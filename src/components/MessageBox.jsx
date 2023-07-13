import React from "react";

function MessageBox(props) {
  // props.message;
  return (
    <div className="message-box-container">
      <div className="message-box-topbar">
        <div onClick={() => props.setShowMessageBox(false)}>x</div>
      </div>
      <div className="message-box-message-container">
        <p className="message-box-message">{props.message}</p>
      </div>
    </div>
  );
}

export default MessageBox;
