import React from 'react';

const Page = ({step,selectPage}) => {
    return (
        <>
            {!step.id && <li ><span className={`panel-nav__list-item panel-nav__list-item_dots`}>...</span></li>}
            {step.id && <li 
                id={step.id}
                className={`panel-nav__list-item ${step.selected ? "selected" : ''}`}
                onClick={() => selectPage(step.id)}>
                <a href="#">{step.id}</a>
            </li>}
            
        </>
    );
}

export default React.memo(Page);