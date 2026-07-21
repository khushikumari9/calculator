const display = document.querySelector('.display');
const keys = document.querySelectorAll('.keys');

let currentInput = '';
let resultDisplayed = false;

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.textContent;

    if (key.classList.contains('ac')) {
      // Clear all
      currentInput = '';
      display.textContent = '';
    } else if (key.classList.contains('del')) {
      // Delete last character
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput;
    } else if (key.classList.contains('e')) {
      // Evaluate expression
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      // Append numbers/operators
      if (resultDisplayed) {
        // If result was just shown, start fresh unless operator pressed
        if (['+', '-', '*', '/', '%'].includes(keyValue)) {
          currentInput += keyValue;
        } else {
          currentInput = keyValue;
        }
        resultDisplayed = false;
      } else {
        currentInput += keyValue;
      }
      display.textContent = currentInput;
    }
  });
});
