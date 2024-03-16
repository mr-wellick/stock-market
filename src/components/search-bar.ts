import { searchTickers } from '../api/alphavantage';
import { TickerSearch } from '../api/apitypes';
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
  data: TickerSearch | null = { bestMatches: [] };

  constructor() {
    super();
  }

  connectedCallback() {
    this.querySelector('input')?.addEventListener('input', async (event: Event) => {
      try {
        // @ts-ignore
        this.userInput = SearchBar.userInputValidator.parse({ value: event.target.value });
      } catch (error) {
        const { issues } = error as ZodError;
        this.userInputError = issues[0].message;
        document.querySelector('#error-message')!.innerHTML = this.userInputError;
        return;
      }

      this.data = await searchTickers(this.userInput.value);

      if (!this.data) {
        document.querySelector('#error-message')!.innerHTML =
          'Something went wrong please try again';
        return;
      }

      // @ts-ignore
      if (this.data.Information) {
        // @ts-ignore
        document.querySelector('#error-message')!.innerHTML = this.data.Information;
        return;
      }

      console.log(this.data);
    });
  }
}

export default SearchBar;
