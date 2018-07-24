import React from "react";

class ActivityItem extends React.Component {
  render() {
    const { activity } = this.props;
    return(
      <div className="item">
        <div className="avatar">
          <img alt="img1" src={activity.user.avatar}/>
          Doug
        </div>
        <span className="time">
          {activity.timestamp}
        </span>
        <p>{activity.text}</p>
        <div className="commentCount">
          {activity.comments.length}
        </div>
      </div>
    );
  }
}

export default ActivityItem
