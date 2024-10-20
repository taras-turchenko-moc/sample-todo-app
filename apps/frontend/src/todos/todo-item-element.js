import { html, LitElement } from 'lit';

export class TodoItemElement extends LitElement {
  static get properties() {
    return {
      todo: {type: Object},
    }
  }

  render() {
    return html`
      <li>${this.todo.text}</li>
    `
  }
}
