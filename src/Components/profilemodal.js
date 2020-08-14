import React from 'react';
import { MdClose } from 'react-icons/Md';
import { IconContext } from 'react-icons';

function Profilemodal(props) {
  if (props.modalVisible) {
    return (
      <div className="modal-wrapper">
        <span
          className="close-button"
          onClick={() => {
            props.setVisibility(false);
          }}
        >
          <IconContext.Provider
            value={{ color: 'rgb(255,255,255)', size: '39px' }}
          >
            <MdClose />
          </IconContext.Provider>
        </span>
        <div className="modal-content-outer">
          <div className="modal-content-middle">
            <div className="modal-content-inner">
              <div className="modal-content">Modal content</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Profilemodal;
