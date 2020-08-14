import React, { useState } from 'react';
import Profilemodal from './profilemodal';

function Profilebody(props) {
  const [modalVisible, setVisibility] = useState(false);

  return (
    <>
      <div className="photo-wrapper">
        {props.posts.map((post, i) => {
          if (post.username === props.currentUser) {
            return (
              <div className="photo-box" key={i}>
                <img
                  src={post.postImage}
                  onClick={() => {
                    setVisibility(true);
                  }}
                ></img>
              </div>
            );
          }
        })}
      </div>
      <Profilemodal modalVisible={modalVisible} setVisibility={setVisibility} />
    </>
  );
}

export default Profilebody;
