import React, { Component } from "react";

class ToDoForm extends Component {
  state = {
    value: ""
  };

  handleChangeInputValue = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const val = this.state.value;
    if (val) this.props.onSubmit(val);

    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 m-auto">
          <form onSubmit={this.handleSubmitForm}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What do you want add?"
                value={this.state.value} // control el-t with state of component
                onChange={this.handleChangeInputValue}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-outline-info">
                  save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoForm;
