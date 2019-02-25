import React, { Component } from "react";

class SortBlock extends Component {
  state = {
    // type: {label: 'all', active: false},
    types: [
      { label: "all", active: true },
      { label: "active", active: false },
      { label: "done", active: false }
    ]
  };

  handleGetingType = label => {
    this.props.onFilter(label);
    const shallCopy = [...this.state.types];
    const index = shallCopy.findIndex(type => type.label === label);
    shallCopy[index] = { ...shallCopy[index] };
    shallCopy[index].active = !shallCopy[index].active;
    this.setState({ types: shallCopy });
  };

  render() {
    const { types } = this.state;
    const btnInitClassNames = "btn btn-outline-dark ";
    const buttons = types.map(type => {
      const { label, active } = type;
      const btnActive = active
        ? btnInitClassNames + "active"
        : btnInitClassNames;
      return (
        <button
          onClick={() => this.handleGetingType(label)}
          type="button"
          className={btnActive}
        >
          {label}
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
