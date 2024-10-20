import { css, html, LitElement } from 'lit';

export class TodoListElement extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    }
  }

  render() {
    return html`
      <app-todo-add-form @todo-added="${this._onTodoAdded}"></app-todo-add-form>
      
      <ul class="list">
        ${this.todos.map(todo => html`<app-todo-item .todo=${todo}></app-todo-item>`)}
      </ul>
    `
  }

  _onTodoAdded(event) {
    this.dispatchEvent(new CustomEvent('todo-added', { detail: event.detail }));
  }

  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
  `
}
