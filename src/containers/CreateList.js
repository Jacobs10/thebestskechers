import React from 'react';

const CreateList = React.createClass({
  displayName: 'About',

  render() {
    return (
      <div>
        Create a Rankings list of your personal five favorite Skechers.
        <p> Search for SKechers pair: 
        <input type='text'/></p>
      </div>
    );
  }
});

export default CreateList;
