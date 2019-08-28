import validate from '../validate.js';

test('validate', () => {
  const input = 'tsla    ';
  const validInput = validate(input);

  expect(validInput).toBe('TSLA');
});

test('validate', () => {
  const input = '*&$*(&*#()@())()#*';
  const validInput = validate(input);

  expect(validInput).toBe(null);
});
