import React, { Component } from "react";

class SortBlock extends Component {
  types = ["all", "active", "done"];

  render() {
    const { onFilter, filter } = this.props;
    const btnInitClassNames = "btn btn-outline-dark ";
    const buttons = this.types.map(type => {
      const active =
        filter === type ? btnInitClassNames + "active" : btnInitClassNames;
      return (
        <button onClick={() => onFilter(type)} type="button" className={active}>
          {type}
        </button>
      );
    });

    return (
      <div className="col-2">
        <div className="btn-group">{buttons}</div>
      </div>
    );
  }
}

export default SortBlock;
