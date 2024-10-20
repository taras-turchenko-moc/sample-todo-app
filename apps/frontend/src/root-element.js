import { css, html, LitElement } from 'lit';
import { sendGet } from './http.js';

export class RootElement extends LitElement {
  static get properties() {
    return {
      _loading: { type: Boolean },
      _todos: { type: Array },
    }
  }

  constructor() {
    super();
    this._loading = true;
    this._todos = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetchTodos();
  }

  async _fetchTodos() {
    this._todos = await sendGet('/todos');
    this._loading = false;
  }

  render() {
    return this._loading ? null : html`
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
    return html`<app-todo-list .todos=${this._todos} @todo-added="${this._onTodoAdded}"></app-todo-list>`;
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
