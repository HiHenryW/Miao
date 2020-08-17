import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdClose } from 'react-icons/Md';
import { IconContext } from 'react-icons';
import Commentform from './commentform';
import Postheader from './postheader';
import Postdescription from './postdescription';
import Postcomments from './postcomments';
import Postreactions from './postreactions';
import Timestamp from './timestamp';

function Profilemodal(props) {
  const [comments, setComments] = useState([]);
  const [reRender, forceReRender] = useState(0);

  useEffect(() => {
    axios
      // .get(
      //   `http://localhost:${process.env.PORT || 3000}/posts/${
      //     props.currentImageId
      //   }`
      // )
      // use below for production build
      .get(`/posts/${props.postId}`)
      .then((res) => {
        // console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reRender, props.currentImageId]);

  if (props.modalVisible) {
    return (
      <div className="modal-wrapper">
        <span
          className="close-button"
          onClick={() => {
            props.setVisibility(false);
            props.setCurrentImage('');
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
                    src={props.postImage}
                  ></img>
                </div>
                <div className="modal-details-wrapper">
                  <Postheader
                    username={props.currentUser}
                    users={props.users}
                  />
                  <div className="modal-interactive-container">
                    <Postdescription
                      postDesc={props.postDesc}
                      username={props.currentUser}
                    />
                    <Timestamp createdAt={props.createdAt} />
                    <Postcomments comments={comments} />
                  </div>
                  <Postreactions
                    postLikes={props.postLikes}
                    postDislikes={props.postDislikes}
                    postId={props.currentImageId}
                    updateReactions={props.updateReactions}
                    updateLocalStorage={props.updateLocalStorage}
                  />
                  <Commentform
                    postId={props.currentImageId}
                    reRender={reRender}
                    forceReRender={forceReRender}
                  />
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
