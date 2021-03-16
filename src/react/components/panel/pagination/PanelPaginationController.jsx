import React, { useState, useRef, useEffect } from "react";

/* Components */
import Page from "./Page.jsx";
import PrevPageIcon from "../../icons/PrevPageIcon.jsx";
import NextPageIcon from "../../icons/NextPageIcon.jsx";

/* Helpers */
import { stepRage } from "../../../helpers/stepRange.js";

const PanelPaginationController = ({ pagesList, getPageContent }) => {
  const [steps, setSteps] = useState([]);
  const pageIndex = useRef(0);

  /* ********************************************* */
  const getPageIndex = () => pagesList.findIndex((page) => page.selected);
  const goPrevPage = () => {
    const index = getPageIndex();

    if (index > 0) {
      pageIndex.current = index - 1;
      getPageContent(index);
    } else {
      return;
    }
  };

  const goNextPage = () => {
    const index = getPageIndex();

    if (index < pagesList.length - 1) {
      pageIndex.current = index + 1;
      getPageContent(index + 2);
    } else {
      return;
    }
  };

  const selectPage = (id) => {
    pageIndex.current = id - 1;
    getPageContent(id);
  };

  /* ********************************************* */
  useEffect(() => {
    setSteps(stepRage(pagesList));

    pageIndex.current = getPageIndex();
  }, [pagesList]);

  return (
    <nav className="panel-nav">
      <button
        type="button"
        className={`panel-nav__icon ${
          pageIndex.current === 0 && "panel-nav__icon_disabled"
        }`}
        onClick={goPrevPage}
      >
        <i>
          <PrevPageIcon />
        </i>
      </button>

      <ul className="panel-nav__list">
        {steps
          ? steps.map((step, index) => {
              return (
                <Page
                  key={step.id ? "id" + step.id : "index" + index}
                  step={step}
                  selectPage={selectPage}
                />
              );
            })
          : ""}
      </ul>

      <button
        type="button"
        className={`panel-nav__icon ${
          pageIndex.current === pagesList.length - 1 &&
          "panel-nav__icon_disabled"
        }`}
        onClick={goNextPage}
      >
        <i>
          <NextPageIcon />
        </i>
      </button>
    </nav>
  );
};

export default React.memo(PanelPaginationController);
