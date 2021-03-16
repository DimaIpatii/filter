export class Page {
  constructor(id = 1, contentList = []) {
    this.id = id;
    this.selected = false;
    this.pageContent = contentList;
  }
}
