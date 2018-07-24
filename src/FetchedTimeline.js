import React from 'react';
import ActivityItem from './components/Timeline/GithubActivityItem';
const data = require('./data.json');

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, // <~ set loading to false
      activities: []
    };
  }

  // Update the data when the component mounts
  componentDidMount() {
    this.updateData();
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh === true) {
      this.setState({loading: true}, this.updateData);
    }
  }

  // Call out to github data and refresh directory
  updateData() {
    this.setState(
      {
        loading: false,
        activities: data.slice(0, 4)
      },
      this.props.onComponentRefresh
    );
  }

  render() {
    const {loading, activities} = this.state;

    return (
      <div className="content">
        <div className="line" />
        {/* Show loading message if loading */}
        {loading && <div>Loading</div>}
        {/* Timeline item */}
        {activities.map(activity => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    );
  }
}

export default Content;
