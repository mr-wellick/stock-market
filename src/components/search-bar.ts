import { APIRateLimit, BestMatches } from '../api/apitypes';
import { ZodError, z } from 'zod';

class SearchBar extends HTMLElement {
  static userInputValidator = z.object({
    value: z
      .string()
      .min(1, { message: 'Must be 1 or more characters long' })
      .max(5, { message: 'Must be 5 or less characters long' }),
  });

  userInput: z.infer<typeof SearchBar.userInputValidator> = { value: '' };
  userInputError: string | null = null;
  ticker: APIRateLimit | BestMatches | null = null;

  constructor() {
    super();
  }

  connectedCallback() {
    this.querySelector('input')?.addEventListener('input', async (event: Event) => {
      try {
        this.userInput = SearchBar.userInputValidator.parse({
          value: (event.target as HTMLInputElement).value,
        });
      } catch (error) {
        const { issues } = error as ZodError;
        this.userInputError = issues[0].message;
        document.querySelector('#error-message')!.innerHTML = this.userInputError;
        return;
      }

      this.ticker = await fetch(
        'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo',
      ).then((res) => res.json());

      if (this.ticker.Information) {
        document.querySelector('#error-message')!.innerHTML = this.ticker.Information;
        return;
      }

      if (!this.ticker) {
        document.querySelector('#error-message')!.innerHTML =
          'Something went wrong please try again';
        return;
      }

      const list = document.querySelector('#stock-list')!;
      const className = 'p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box mt-1';
      list.setAttribute('class', className);

      list.innerHTML = `
          ${this.ticker.bestMatches.map((stock) => {
            return `<li>${stock['2. name']}</li>`;
          })}`;

      this.querySelector('#stock-list')
        ?.querySelectorAll('li')
        .forEach((item) => {
          item.addEventListener('click', (event: Event) => {
            console.log((event.target as HTMLLIElement).innerHTML);
          });
        });
    });
  }
}

export default SearchBar;
