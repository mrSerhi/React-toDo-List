import React, { Component } from "react";

class Search extends Component {
  state = {
    value: this.props.query
  };

  handleInputChange = e => {
    const target = e.target.value;

    this.props.onSearch(target);
    this.setState({ value: target });
  };

  render() {
    return (
      <div className="col-4">
        <div className="input-group">
          <input
            onChange={this.handleInputChange}
            value={this.state.value}
            type="search"
            className="form-control text-info"
            placeholder="Try to search..."
          />
        </div>
      </div>
    );
  }
}

export default Search;
