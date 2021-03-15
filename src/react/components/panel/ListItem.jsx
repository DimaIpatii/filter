import React from 'react';

import CheckmarkIcon from '../icons/CheckmarkIcon.jsx';
import ClouseIcon from '../icons/ClouseIcon.jsx';

const ListItem = ({userId,id,title,completed}) => {
    return (
        <li id={id} className="panel__list-item list-item">
            <p className="list-item__id">{userId}</p>
            <p className="list-item__title">{title}</p>
            <p className="list-item__state">
                <i className="list-item__state-icon">
                    {completed && <CheckmarkIcon/> }
                    {!completed && <ClouseIcon /> }
                </i>
            </p>
        </li>
    );
};

export default ListItem;
