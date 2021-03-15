export class ListItem{
    constructor(userId = 1,id = 1,title = '',completed = false){
        this.userId = userId;
        this.id = id;
        this.title = title.charAt(0).toUpperCase() + title.slice(1) ;
        this.completed = completed;
    }
}