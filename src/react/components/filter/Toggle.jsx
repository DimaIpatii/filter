import React, { useState, useEffect } from "react";

const Toggle = ({ isSelected, filterState }) => {
  const [state, setState] = useState("all");

  /* ********************************************* */

  const toggleButton = (state) => {
    isSelected((currVal) => ({
      ...currVal,
      reset: false,
      completed: state.toUpperCase(),
    }));
    setState(state);
  };

  /* ********************************************* */
  useEffect(() => {
    if (filterState.reset === true) {
      setState("all");
    }
  }, [filterState.reset]);

  return (
    <div className="form__toggle ">
      <h2>COMPLETED</h2>
      <div className="toggle">
        <p className="toggle__state">{filterState.completed}</p>

        <div className="btn-toggle">
          {/*  Toggle Button */}
          <div
            className={`btn-toggle__label ${
              state && `btn-toggle__label_${state}`
            }`}
          ></div>

          {/* NO */}
          <label htmlFor="no" className="btn-toggle__input-wrapper">
            <input
              onClick={() => toggleButton("no")}
              id="no"
              type="radio"
              name="completed"
              className="btn-toggle__input"
            />
          </label>

          {/*  ALL */}
          <label htmlFor="all" className="btn-toggle__input-wrapper">
            <input
              onClick={() => toggleButton("all")}
              defaultChecked="checked"
              id="all"
              type="radio"
              name="completed"
              className="btn-toggle__input"
            />
          </label>

          {/* YES */}
          <label htmlFor="yes" className="btn-toggle__input-wrapper">
            <input
              onClick={() => toggleButton("yes")}
              id="yes"
              type="radio"
              name="completed"
              className="btn-toggle__input"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
