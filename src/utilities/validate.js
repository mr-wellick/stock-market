function validate(userInput) {
  const singleWord = /\w+/;
  const isValidInput = userInput.match(singleWord);

  if (isValidInput !== null) {
    return isValidInput[0].toUpperCase();
  }

  return isValidInput;
}

export default validate;
