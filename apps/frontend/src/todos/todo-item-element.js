import { html, LitElement } from 'lit';
import { sendPatch } from '../http.js';

export class TodoItemElement extends LitElement {
  static get properties() {
    return {
      todo: {type: Object},
    }
  }

  render() {
    return html`
      <li>
        <label>
          <input type="checkbox" .checked=${this.todo.completed} @change="${this._toggleCompleted}">
          ${this.todo.text}
        </label>
      </li>
    `
  }

  async _toggleCompleted(event) {
    const isCompleted = event.target.checked;
    await sendPatch(`/todos/${this.todo.id}`, { completed: isCompleted });
  }
}
