export class Item {
  constructor(title, value) {
    this.title = title;
    if(!_.isUndefined(value)) {
      this.value = value;
    } else {
      this.value = title;
    }
  }
}
