import React, { useState } from 'react';
import Profilemodal from './profilemodal';

function Profilebody(props) {
  const [modalVisible, setVisibility] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

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
                    setCurrentImage(post);
                  }}
                ></img>
              </div>
            );
          }
        })}
      </div>
      <Profilemodal
        modalVisible={modalVisible}
        setVisibility={setVisibility}
        setCurrentImage={setCurrentImage}
        currentImage={currentImage}
        users={props.users}
        currentUser={props.currentUser}
        updateReactions={props.updateReactions}
        updateLocalStorage={props.updateLocalStorage}
      />
    </>
  );
}

export default Profilebody;
