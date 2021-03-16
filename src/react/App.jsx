import React, { useState } from "react";

/* Components */
import FilterViewController from "./components/filter/FilterViewController.jsx";
import PanelViewController from "./components/panel/PanelViewController.jsx";

/* API */
import endpoint from "./api/endpoint.js";

import { useFetch } from "./helpers/useFetch.js";

const App = () => {
  const [response, loading, error] = useFetch(endpoint);
  const [pages, setPages] = useState([]);

  return (
    <>
      {loading === false && error.state === false && response ? (
        <>
          <FilterViewController
            getOutputValue={setPages}
            inputValue={response}
          />
          <PanelViewController pages={pages} />
        </>
      ) : (
        ""
      )}
      {loading && <h1>Loading...</h1>}
      {error.state && <h1>{error.errorMsg}</h1>}
    </>
  );
};

export default App;
