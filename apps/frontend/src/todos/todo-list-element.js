import { html, LitElement } from 'lit';

export class TodoListElement extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    }
  }

  render() {
    return html`
      <ul>
        ${this.todos.map(todo => html`<app-todo-item .todo=${todo}></app-todo-item>`)}
      </ul>
    `
  }
}
