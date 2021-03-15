import React,{useState,useEffect} from 'react';

/* Components */
import FilterViewController from './components/filter/FilterViewController.jsx';
import PanelViewController from './components/panel/PanelViewController.jsx';

/* API */
import endpoint from './api/endpoint.js';

import {useFetch} from './helpers/useFetch.js';
import {renderPages} from './helpers/renderPages.js';


const App = () => {
    const [response,loading,error] = useFetch(endpoint);
    const [pages,setPages] = useState([]);

    useEffect(() => {
        if(!response) return;
        
        const output = renderPages(response);
        output[0].selected = true;
        
        setPages(output);
    }, [response]);

    return (
        <>
            {(loading === false && error.state === false && response) 
            ? (<>
                <FilterViewController setPages={setPages} initVal={response}/>
                <PanelViewController pages={pages}/>
            </>)
            : ''}
            {loading && <h1>Loading...</h1>}
            {error.state && <h1>{error.errorMsg}</h1>}
        </>
    );
};

export default App;