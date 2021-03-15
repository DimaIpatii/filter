import React,{useState} from 'react';

import ListItem from './ListItem.jsx';
import PanelPaginationController from './pagination/PanelPaginationController.jsx';

const PanelViewController = ({pages}) => {
    const [listContent,setListContent] = useState([]);

    return (
        <main className="app__panel panel">
            <header className="panel__header">
                <p>USER ID</p>
                <p>TITLE</p>
                <p>COMPLETED</p>
            </header>
            <div className="panel__content">
                <ul className="panel__list">
                    {listContent.length > 0 
                    ?  (listContent.map(data => {
                            return (<ListItem key={data.id} {...data}/>);
                        }))
                    : <h1 className="panel__message">No List Items Found!</h1>}
                </ul>
            </div>
            <footer className="panel__footer">
                {pages.length > 0 && <PanelPaginationController pages={pages} getPageContent={setListContent}/>}
            </footer>
        </main>
    )
};

export default PanelViewController