import React from 'react';
import { connect } from 'react-redux';
// import ListItemForm from '../components/ListItemForm';
// import { addItem } from '../actions/index';

const ShowPage = React.createClass({
//  displayName: 'ListPage',

  render() {
    return (
      <div>
        {this.props.shoe}
      </div>
    );
  }
});
export default ShowPage;

function mapStateToProps(state) {
  return { shoe: state.activeShoe.shoe };
}

export default connect(mapStateToProps)(ShowPage);
