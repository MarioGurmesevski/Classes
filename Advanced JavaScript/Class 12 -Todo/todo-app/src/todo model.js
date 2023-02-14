export class Todo {
  constructor(text, priority) {
    this.id = String(Math.random());
    this.text = text;
    this.priority = priority;
    this.isFinished = false;
  }
  finishedTowo() {
    this.isFinished = true;
  }
  updateTodo(text, priority) {
    this.priority = priority;
    this.text = text.lenght > 4 ? text : this.text;
  }
}
