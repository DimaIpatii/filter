import React, { useState, useEffect } from "react";

import ListItem from "./ListItem.jsx";
import PanelPaginationController from "./pagination/PanelPaginationController.jsx";

const PanelViewController = ({ pages }) => {
  const [pageContent, setPageContent] = useState([]);
  const [pagesList, setPagesList] = useState([]);

  const changePage = (pageNumber) => {
    /* Update pagination list */
    const changePage = pagesList.map((page) => {
      if (page.id === pageNumber) {
        page.selected = true;
        return page;
      }
      page.selected = false;
      return page;
    });

    /* Update Page content in panel */
    const selectedPage = pages.filter((page) => page.id === pageNumber);

    setPagesList([...changePage]);
    setPageContent(selectedPage[0].pageContent);
  };

  /* ******************************************** */
  /* Define Current Page in Pannel */
  useEffect(() => {
    let selectedPageContent = [];
    let pagesContent = [];
    if (pages.length > 0) {
      const selectedPage = pages.filter((page) => page.selected === true);

      selectedPageContent = selectedPage[0].pageContent;

      pagesContent = pages.map((page) => ({
        id: page.id,
        selected: page.selected,
      }));
    }

    setPageContent(selectedPageContent);
    setPagesList(pagesContent);
  }, [pages]);

  /* Define Steps in Pagination Controller */
  /* useEffect(() => {
    
    const pagesContent = pages.map((page) => ({
      id: page.id,
      state: page.selected,
    }));

    setPagesList(pagesContent);
  }, []); */

  return (
    <main className="app__panel panel">
      <header className="panel__header">
        <p>USER ID</p>
        <p>TITLE</p>
        <p>COMPLETED</p>
      </header>
      <div className="panel__content">
        <ul className="panel__list">
          {pageContent.length > 0 && pages.length > 0 ? (
            pageContent.map((data) => {
              return <ListItem key={data.id} {...data} />;
            })
          ) : (
            <article className="panel__message">
              <h1>No list items found!</h1>
              <h2>Please, try again.</h2>
            </article>
          )}
        </ul>
      </div>
      <footer className="panel__footer">
        {pagesList.length > 0 ? (
          <PanelPaginationController
            pagesList={pagesList}
            getPageContent={changePage}
          />
        ) : (
          ""
        )}
      </footer>
    </main>
  );
};

export default PanelViewController;
