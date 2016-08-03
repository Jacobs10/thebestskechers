import React from 'react';

const CreateList = React.createClass({
  displayName: 'About',

  render() {
    return (
      <div>
        Add your favorite Shoes here, by ranking.
        <p>Search your favorite shoe: <input type='text'/></p>
      </div>
    );
  }
});

export default CreateList;
