import React, { Component } from "react";

class SortBlock extends Component {
  state = {};
  render() {
    return (
      <div className="col-2">
        <div className="btn-group">
          <button type="button" className="btn btn-outline-dark">
            all
          </button>
          <button type="button" className="btn btn-outline-dark">
            active
          </button>
          <button type="button" className="btn btn-outline-dark">
            done
          </button>
        </div>
      </div>
    );
  }
}

export default SortBlock;
