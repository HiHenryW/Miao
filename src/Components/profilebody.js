import React, { useState, useEffect } from 'react';
import Profilemodal from './profilemodal';

class Profilebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentImage: '',
    };

    this.setVisibility = this.setVisibility.bind(this);
    this.setCurrentImage = this.setCurrentImage.bind(this);
  }

  setVisibility(boolean) {
    this.setState({ modalVisible: boolean });
  }

  setCurrentImage(post) {
    this.setState({ currentImage: post });
  }

  render() {
    return (
      <>
        <div className="photo-wrapper">
          {this.props.posts.map((post, i) => {
            if (post.username === this.props.currentUser) {
              return (
                <div className="photo-box" key={i}>
                  <img
                    src={post.postImage}
                    onClick={() => {
                      this.setVisibility(true);
                      this.setCurrentImage(post);
                    }}
                  ></img>
                </div>
              );
            }
          })}
        </div>
        <Profilemodal
          modalVisible={this.state.modalVisible}
          setVisibility={this.setVisibility}
          setCurrentImage={this.setCurrentImage}
          currentImage={this.state.currentImage}
          postLikes={this.state.currentImage.postLikes}
          postDislikes={this.state.currentImage.postDislikes}
          currentImageId={this.state.currentImage._id}
          postImage={this.state.currentImage.postImage}
          postDesc={this.state.currentImage.postDesc}
          createdAt={this.state.currentImage.createdAt}
          users={this.props.users}
          currentUser={this.props.currentUser}
          updateReactions={this.props.updateReactions}
          updateLocalStorage={this.props.updateLocalStorage}
        />
      </>
    );
  }
}

export default Profilebody;
