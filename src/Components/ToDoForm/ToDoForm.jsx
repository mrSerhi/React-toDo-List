import React from "react";

const ToDoForm = () => {
  return (
    <div className="row">
      <div className="col-sm-6 m-auto">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="What do you want add?"
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
};

export default ToDoForm;
