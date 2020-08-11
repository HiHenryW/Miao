import React from 'react';
import moment from 'moment';

function Timestamp(props) {
  return <div className="timestamp">{moment(props.createdAt).fromNow()}</div>;
}

export default Timestamp;
