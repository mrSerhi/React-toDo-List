import React from "react";

const HeaderBlock = () => {
  const allItems = <span className="badge badge-info p-2">3</span>;
  const doneItems = <span className="badge badge-success p-2">0</span>;

  return (
    <div className="row py-3">
      <div className="col-6 offset-1 text-center">
        <h1 className="display4 text-uppercase">to-do app</h1>
      </div>
      <div className="col-4">
        <p>
          You have {allItems} items, and {doneItems} Done.
        </p>
      </div>
    </div>
  );
};

export default HeaderBlock;
