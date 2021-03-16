import React from "react";

const Page = ({ step, selectPage }) => {
  return (
    <>
      {!step.id && (
        <li>
          <span className={`panel-nav__list-item panel-nav__list-item_dots`}>
            ...
          </span>
        </li>
      )}
      {step.id && (
        <li id={step.id}>
          <button
            type="button"
            className={`panel-nav__list-item ${
              step.selected ? "selected" : ""
            }`}
            onClick={() => selectPage(step.id)}
          >
            {step.id}
          </button>
        </li>
      )}
    </>
  );
};

export default React.memo(Page);
