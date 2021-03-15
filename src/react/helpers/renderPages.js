import {ListItem} from './listItemModel.js';
import {Page} from './pageModel.js';

export const renderPages = (list) => {
    const itemsPerPage = 5;
   
    /* Render Custom List */
    const customList = list.map(list => {
        const values = Object.values(list);
        const output = new ListItem(...values);
        return {...output};
    });

    const amountOfPages = Math.ceil(customList.length / itemsPerPage);

    const output = new Array(amountOfPages)
    .fill()
    .map((_,index) =>{
        const pageContent = customList.splice(0,itemsPerPage);

        /* Render Custom Pages */
        const page = new Page(index + 1,pageContent);
        return {...page};
    });

    return output;
};