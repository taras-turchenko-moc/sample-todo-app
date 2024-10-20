import { css, html, LitElement } from 'lit';

export class RootElement extends LitElement {
  static get properties() {
    return {
      _todos: { type: Array },
    }
  }

  constructor() {
    super();
    this._todos = [];
  }

  render() {
    return html`
      <div class="app">
        ${this._todos.length ? this._renderList() : this._renderEmpty()}
      </div>
    `;
  }

  _renderEmpty() {
    return html`
      <p>No todos yet</p>
      <app-todo-add-form @todo-added="${this._onTodoAdded}"></app-todo-add-form>
    `;
  }

  _renderList() {
    return html`<app-todo-list .todos=${this._todos}></app-todo-list>`;
  }

  _onTodoAdded(event) {
    this._todos = [...this._todos, event.detail];
  }

  static styles = css`
    :host {
      display: block;
      height: 100%;
    }
  
    .app {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
    }
  `
}
