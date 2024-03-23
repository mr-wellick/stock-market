import { ZodError, z } from 'zod';
import store from '../state/store';

class SearchBar extends HTMLElement {
  static userInputValidator = z.object({
    value: z
      .string()
      .min(1, { message: 'Must be 1 or more characters long' })
      .max(5, { message: 'Must be 5 or less characters long' }),
  });

  userInput: z.infer<typeof SearchBar.userInputValidator> = { value: '' };
  input: HTMLInputElement = this.querySelector('input')!;

  constructor() {
    super();
  }

  connectedCallback() {
    //this.querySelector('input')?.addEventListener('blur', (event: Event) => {
    //  console.log('lost foucs', event);
    //  const list = document.querySelector('#stock-list')!;
    //  list.setAttribute('class', 'hidden');
    //});

    //this.querySelector('input')?.addEventListener('focus', (event: Event) => {
    //  console.log('lost foucs', event);
    //  const list = document.querySelector('#stock-list')!;
    //  const className = 'shadow menu dropdown-content z-[1] bg-base-100 rounded-box mt-1';

    //  if (store.ticker && 'bestMatches' in store.ticker) {
    //    list.setAttribute('class', className);
    //  }
    //});

    this.input.addEventListener('keyup', async (event: Event) => {
      try {
        this.userInput = SearchBar.userInputValidator.parse({
          value: (event.target as HTMLInputElement).value,
        });
      } catch (error) {
        const { issues } = error as ZodError;
        document.querySelector('#error-message')!.innerHTML = issues[0].message;
        return;
      }

      await store.searchTickers(this.userInput.value);

      if (!store.ticker) {
        document.querySelector('#error-message')!.innerHTML = 'something went wrong. try again.';
        return;
      }

      if ('Information' in store.ticker) {
        document.querySelector('#error-message')!.innerHTML = store.ticker.Information;
        return;
      }

      //const list = document.querySelector('#stock-list')!;
      //const className = 'shadow menu dropdown-content z-[1] bg-base-100 rounded-box mt-1';
      //list.setAttribute('class', className);

      //list.innerHTML = `
      //    ${store.ticker.bestMatches
      //      .map((stock) => {
      //        return `<li><a>${stock['1. symbol']}</a></li>`;
      //      })
      //      .join('')}
      //  `;

      //this.querySelector('#stock-list')
      //  ?.querySelectorAll('li')
      //  .forEach((item) => {
      //    item.addEventListener('click', (event: Event) => {
      //      store.getStock((event.target as HTMLLIElement).innerHTML);
      //    });
      //  });
    });
  }
}

export default SearchBar;
