import React from 'react';

function Profilemodal(props) {
  if (props.modalVisible) {
    return <div className="modal-wrapper">Popup Modal placeholder</div>;
  } else {
    return null;
  }
}

export default Profilemodal;
