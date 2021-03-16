import React, { useState, useEffect } from "react";

/* Components */
import Search from "./Search.jsx";
import Toggle from "./Toggle.jsx";
import Select from "./Select.jsx";

/* Helpers */
import { renderPages } from "../../helpers/renderPages.js";

const FilterViewController = ({ getOutputValue, inputValue }) => {
  const [filteredData, setFilteredData] = useState(inputValue);
  const [showForm, setShowForm] = useState(false);
  const [filterState, setFilterState] = useState({
    keyWord: "",
    completed: "ALL",
    ids: [],
    reset: false,
  });

  /* ********************************************* */
  const resetFilter = () => {
    setFilterState({
      keyWord: "",
      completed: "ALL",
      ids: [],
      reset: true,
    });
    setFilteredData(inputValue);
  };

  const checkByKeyWord = (keyWord, inputVal = inputValue) => {
    return inputVal.filter(
      (el) => el.title.toLowerCase() === keyWord.toLowerCase()
    );
  };

  const checkById = (idsList, inputVal = inputValue) => {
    let output = [];

    for (let idItem of idsList) {
      for (let val of inputVal) {
        if (val.userId === idItem.id) {
          output.push(val);
        }
      }
    }
    return output;
  };

  const checkByCompleted = (completed, inputVal = inputValue) => {
    let state;
    switch (completed) {
      case "YES":
        state = true;
        break;
      case "NO":
        state = false;
        break;
      default:
        return inputVal;
    }

    return inputVal.filter((el) => el.completed === state);
  };

  const filterController = () => {
    const { keyWord, completed, ids } = filterState;
    let accumulator;
    let filterOutput;

    // Check By Key Word:
    if (keyWord.length > 0) {
      const filteredList = checkByKeyWord(keyWord, accumulator);
      accumulator = filteredList;
    }

    // Check By Ids:
    if (ids.length > 0) {
      const filteredList = checkById(ids, accumulator);
      accumulator = filteredList;
    }

    // Check By Completed:
    filterOutput = checkByCompleted(completed, accumulator);

    setFilteredData(filterOutput);
  };

  /* ********************************************* */

  useEffect(() => {
    filterController();
  }, [filterState]);

  useEffect(() => {
    let output = [];

    if (filteredData && filteredData.length > 0) {
      output = renderPages(filteredData);
      output[0].selected = true;
    }

    getOutputValue(output);
  }, [filteredData]);

  return (
    <aside className="app__sidebar sidebar">
      <button
        type="button"
        className="sidebar__open-filter-btn open-filter-btn"
        onClick={() => setShowForm(true)}
      >
        <ion-icon name="options-outline"></ion-icon>
      </button>
      <form
        action="#"
        method="POST"
        className={`form ${showForm ? "form_show" : ""}`}
      >
        <button
          type="button"
          className="form__clouse-btn clouse-filter-btn"
          onClick={() => setShowForm(false)}
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
        <fieldset className="form__fieldset">
          <legend>FILTERS</legend>
          <Search submitText={setFilterState} />
          <Toggle isSelected={setFilterState} filterState={filterState} />
          <Select
            getId={setFilterState}
            initVal={inputValue}
            filterState={filterState}
          />
          <button
            type="reset"
            className="form__reset-button btn-reset"
            onClick={resetFilter}
          >
            Reset filters
          </button>
        </fieldset>
      </form>
    </aside>
  );
};

export default React.memo(FilterViewController);
