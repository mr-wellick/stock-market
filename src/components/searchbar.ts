import { LitElement, css, html } from 'lit';
//import { customElement, property } from 'lit/decorators.js';

//@customElement('search-bar')
export default class SearchBar extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
    }
  `;

  // Declare reactive properties
  //@property()
  //name?: string = 'World';

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="m-2">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" id="search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <div role="alert" class="mt-1 alert alert-error hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span id="error-message"></span>
        </div>
        <ul class="hidden max-width-full" id="stock-list" />
      </div>
    `;
  }
}
