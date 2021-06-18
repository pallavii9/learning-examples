import React from 'react';
import ReactDOM from 'react-dom';

function Eventhandle() {
    function handleSubmit(e) {
      e.preventDefault();
      alert('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }

export default Eventhandle;
