import './main.css';
import { RootElement } from './root-element.js';
import { TodoListElement } from './todos/todo-list-element.js';
import { TodoItemElement } from './todos/todo-item-element.js';
import { TodoAddFormElement } from './todos/todo-add-form-element.js';

customElements.define('app-root', RootElement);
customElements.define('app-todo-list', TodoListElement);
customElements.define('app-todo-item', TodoItemElement);
customElements.define('app-todo-add-form', TodoAddFormElement)
