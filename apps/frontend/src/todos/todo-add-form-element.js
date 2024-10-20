import { css, html, LitElement } from 'lit';
import { sendPost } from '../http.js';

export class TodoAddFormElement extends LitElement {
  render() {
    return html`
        <form class="form" @submit="${this._onSubmit}">
          <input name="text" class="form__input">

          <button class="form__submit">
            Add
          </button>
        </form>
    `
  }

  async _onSubmit(event) {
    event.preventDefault();
    const text = event.target.text.value.trim();
    if (text) await this._create(text)
  }

  async _create(text) {
    const todo = await sendPost('/todos', { text });
    this.dispatchEvent(new CustomEvent('todo-added', { detail: todo }));
  }

  static styles = css`
    .form {
      display: flex;
      width: 100%;
      max-width: 500px;
    }
    
    .form__input {
      flex-basis: 0;
      flex-grow: 1;
    }

    .form__submit {
      flex-shrink: 0;
      margin-left: 8px
    }
  `
}
