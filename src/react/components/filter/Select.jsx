import React, { useState,useEffect } from 'react'

import SelectIdIcon from '../icons/SelectIdIcon.jsx';

const Select = ({getId,initVal,reset}) => {
    const [listId, setListId] = useState([]);
    const [selectedIds, setSelectedIds] = useState([])
    const [open, setOpen] = useState(false);

    /* ************************************************** */
    const selectId = (id) => {
        const output = listId.map(listItem => {
            if(listItem.id === id ){
                listItem.selected = !listItem.selected;   
                return listItem;
            }
            return listItem;
        });
        const selectedIds = output.filter(id => id.selected);
        
        setListId([...output]);
        setSelectedIds(selectedIds);
        getId((currValues) => ({...currValues, ids : selectedIds}));
    }

    /* ************************************************** */
    useEffect(() => {
        if(!initVal || initVal.length === 0) return;

        const ids = initVal.reduce((acc,val) => {
            if(acc.includes(val.userId)) return acc;
            return acc.concat(val.userId);
        },[]);
        
        const output = ids.map(id => ({id : id, selected : false}));
    
        setListId([...output]);
    }, []);

    useEffect(() => {
        if(reset === true){
            setSelectedIds([]);
            setListId((list => {
                return list.map(el => {
                    el.selected = false;
                    return el;
                })
            }))
        }
    }, [reset]);
    
    return (
        <div className="form__select">
            <h2>SELECT USER ID</h2>
            <div className="select-id">
                <div className="select-id__list-of-selected">
                    {selectedIds && selectedIds.map((val,index) => {
                        if(index > 7) return;
                        return <span key={"id-label" + val.id} className="select-id__list-item">{val.id}</span>;
                    })}
                </div>
                
                <button type="button" className="select-id__button btn-select-id" onClick={() => setOpen(!open)}>
                    <SelectIdIcon />
                </button>

                <div className={`select-id__content ${open ? 'select-id__content_show' : ''}`}>
                    {listId && listId.length > 0 && listId.map(val => {
                        return ( 
                            <label 
                                key={'id' + val.id}
                                htmlFor={val.id} 
                                className={`select-id__item ${val.selected ? 'select-id__item_selected': ''}`}>
                                    {val.id}
                                <input onClick={() => selectId(val.id)} id={val.id} type="checkbox" name="selected_id"/>
                            </label>
                         );
                    })}
                </div>
                
            </div>
        </div>
    )
};

export default React.memo(Select);
