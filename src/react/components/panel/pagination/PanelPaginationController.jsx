import React, {useState,useRef,useEffect} from 'react';

/* Components */
import Page from './Page.jsx';
import PrevPageIcon from '../../icons/PrevPageIcon.jsx';
import NextPageIcon from '../../icons/NextPageIcon.jsx';

/* Helpers */
import {stepRage} from '../../../helpers/stepRange.js';

const PanelPaginationController = ({pages,getPageContent}) => {
    const [pageList,setPageList] = useState(pages);
    const [steps, setSteps] = useState([]);

    const pageIndex = useRef(0);

    /* ********************************************* */
    
    const goPrevPage = () => {   
        const prevPage = (currPages) => {
            const index = currPages.findIndex(page => page.selected);
            
            if(index === 0) return currPages;
            pageIndex.current = index - 1;

            currPages[index].selected = false;
            currPages[index - 1].selected = true;
            return [...currPages];
        };

        setPageList(prevPage(pageList));
    };

    const goNextPage = () => {
        const nextPage = (currPages) => {
            const index = currPages.findIndex(page => page.selected);
            
            if(index === currPages.length - 1) return currPages;
            pageIndex.current = index + 1;
            currPages[index].selected = false;
            currPages[index + 1].selected = true;
            return [...currPages];
        }
        setPageList(nextPage(pageList));
    };

    const selectPage = (id) => {
        setPageList((currPages) => {
            const output = currPages.map((page,index) => {
                if(page.id === id){
                    pageIndex.current = index;
                    page.selected = true;
                    return page;
                }
                page.selected = false;
                return page;
            });

            return [...output];
        });
    };

    /* ********************************************* */
    useEffect(() => {
        setSteps(stepRage(pageList));

        /* Get Content from selected Page: */
        const selectedPage = pageList.find(page => page.selected);
        getPageContent(selectedPage.pageContent);
    }, [pageList])

    useEffect(() => {
        setPageList([...pages]);
    },[pages]);

    return (
        <nav className="panel-nav">
            <i className={`panel-nav__icon ${pageIndex.current === 0 &&"panel-nav__icon_disabled"}`}
                onClick={goPrevPage}>
                <PrevPageIcon />
            </i>
            
            <ul className="panel-nav__list">
                {steps ? steps.map((step,index) => {
                    return(<Page key={step.id ? 'id' + step.id : 'index' + index} step={step} selectPage={selectPage} /> );
                }) 
                : ''}
            </ul>

            <i className={`panel-nav__icon ${pageIndex.current === pageList.length - 1  && "panel-nav__icon_disabled"}`}
                onClick={goNextPage}>
                <NextPageIcon />
            </i>
        </nav>
    );
};

export default React.memo(PanelPaginationController);






