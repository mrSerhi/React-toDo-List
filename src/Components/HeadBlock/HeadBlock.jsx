import React from "react";
import PropTypes from "prop-types";

const HeaderBlock = ({ allToDo, doneToDo }) => {
  const allItems = <span className="badge badge-info p-2">{allToDo}</span>;
  const doneItems = <span className="badge badge-success p-2">{doneToDo}</span>;

  return (
    <div className="row py-3">
      <div className="col-6 offset-1 text-center">
        <h1 className="display4 text-uppercase">to-do app</h1>
      </div>
      <div className="col-4">
        <p>
          You have {allItems} <b>Active</b> items, and {doneItems} <b>Done</b>.
        </p>
      </div>
    </div>
  );
};

HeaderBlock.propTypes = {
  allToDo: PropTypes.number,
  doneToDo: PropTypes.number
};

export default HeaderBlock;
