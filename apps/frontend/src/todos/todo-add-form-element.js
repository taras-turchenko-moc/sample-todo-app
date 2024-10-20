import { css, html, LitElement } from 'lit';
import { sendPost } from '../http.js';

export class TodoAddFormElement extends LitElement {
  render() {
    return html`
        <form @submit="${this._onSubmit}">
          <input name="text">

          <button type="submit">
            Add
          </button>
        </form>
    `
  }

  async _onSubmit(event) {
    event.preventDefault();
    const inputEl = event.target.text;
    const text = inputEl.value.trim();

    if (text) {
      await this._create(text)
      inputEl.value = '';
    }
  }

  async _create(text) {
    const todo = await sendPost('/todos', { text });
    this.dispatchEvent(new CustomEvent('todo-added', { detail: todo }));
  }

  static styles = css`
    form {
      display: flex;
      width: 100%;
      max-width: 500px;
    }

    input {
      flex-basis: 0;
      flex-grow: 1;
    }

    button {
      flex-shrink: 0;
      margin-left: 8px
    }
  `
}
