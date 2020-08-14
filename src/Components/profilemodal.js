import React from 'react';
import { MdClose } from 'react-icons/Md';
import { IconContext } from 'react-icons';
import Commentform from './commentform';
import Postheader from './postheader';
import Postdescription from './postdescription';
import Postcomments from './postcomments';
import Postreactions from './postreactions';
import Timestamp from './timestamp';

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
              <div className="modal-content-wrapper">
                <div className="modal-content-image-wrapper">
                  <img
                    className="modal-content-image"
                    src={props.currentImage.postImage}
                  ></img>
                </div>
                <div className="modal-details-wrapper">
                  <Postheader
                    username={props.currentUser}
                    users={props.users}
                  />
                  <div className="modal-interactive-container">
                    <Postdescription
                      postDesc={props.currentImage.postDesc}
                      username={props.currentUser}
                    />
                    <Timestamp createdAt={props.currentImage.createdAt} />
                    <Postcomments postId={props.currentImage._id} />
                  </div>
                  <Postreactions
                    postLikes={props.currentImage.postLikes}
                    postDislikes={props.currentImage.postDislikes}
                    postId={props.currentImage._id}
                    updateReactions={props.updateReactions}
                  />
                  <Commentform postId={props.currentImage._id} />
                </div>
              </div>
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
