import React from 'react';
import { GiMeat } from 'react-icons/gi';
import { FaPoop } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Postreactions(props) {
  return (
    <div className="reactions-container">
      <span className="likes-container">
        <IconContext.Provider value={{ color: 'blue', size: '24px' }}>
          <GiMeat />
          {props.postLikes}
        </IconContext.Provider>
      </span>
      <span className="dislikes-container">
        <IconContext.Provider value={{ color: 'brown', size: '15px' }}>
          <FaPoop />
          {props.postDislikes}
        </IconContext.Provider>
      </span>
    </div>
  );
}

export default Postreactions;
