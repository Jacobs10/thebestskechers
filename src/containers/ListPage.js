import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItemForm from '../components/ListItemForm';
import { addItem } from '../actions/index';
import { Link } from 'react-router';
import { selectItem } from '../actions/index';

const ListPage = React.createClass({
  displayName: 'ListPage',

  handleAddItem(item) {
    this.props.dispatch(addItem(item));
  },

  render() {
    const items = this.props.items.map((item, index) => {
      return (<li key={index} onClick={() => this.props.selectItem(item)}>
            <Link to={`/skechers/${item}`}>{item}</Link></li>);
    });

    return (
      <div>
        <ListItemForm handleAddItem={this.handleAddItem} />

        <ol>{items}</ol>
      </div>
    );
  },

  propTypes: {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    selectItem: PropTypes.func.isRequired
  }
});

function mapStateToProps(state) {
  return { items: state.list.items };
}

export default connect(mapStateToProps, { selectItem })(ListPage);
