let isAlive = false;
let passwordResult = document.querySelector('.mid-result');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

const customWordsArray = [
  'mountain',
  'adventure',
  'celebration',
  'keyboard',
  'framework',
  'background',
  'trolleybus',
  'brilliance',
  'congratulate',
  'transmission',
  'friendship',
  'perception',
  'astronautical',
  'backpacking',
  'extravagantly',
  'revolutionary',
  'hypothesize',
  'understanding',
  'unbelievable'
];

let passwordSlider = document.querySelector('#password-slider');
let passwordValue = document.querySelector('.slider-value');

const passMinEl = document.querySelector('.pass-slider-min');
const passMaxEl = document.querySelector('.pass-slider-max');

const passRegen = document.querySelector('.pass-regen');
const passCustom = document.querySelector('.pass-custom');

const copyBtn = document.querySelector('.copy-btn');

const strongCon = document.querySelector('.strong-indicator');

const footerNotes = document.querySelector('.foot-notes');

function copyPasswordValue() {
  const textToCopy = passwordResult.textContent; // Get the text content of passwordResult

  // sa chatGPT galing 'to.
  if (textToCopy.trim() !== '') { // Ensure text is not empty
    // Use Clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        passwordValue.textContent = 'Copied'; // Notify user
        
        setTimeout(() => {
          passwordValue.textContent = ''; // Clear message after 1 second
        }, 1000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        passwordValue.textContent = 'Failed to copy';
        setTimeout(() => {
          passwordValue.textContent = ''; // Clear message
        }, 1000);
      });
  } else {
    passwordValue.textContent = 'Nothing to copy'; // Handle case with empty text
    setTimeout(() => {
      passwordValue.textContent = ''; // Clear message
    }, 1000);
  }
}



copyBtn.addEventListener('click', () => {
  copyPasswordValue();
})


passwordSlider.addEventListener('input', () => {
  passwordValue.textContent = passwordSlider.value;
});


function passwordMin() {
  if (passwordSlider.value <= 20) {
    passwordSlider.value = Number(passwordSlider.value) - 1;
    passwordValue.textContent = passwordSlider.value;
  }
  return passwordValue;
}

function passwordMax() {
  if (passwordSlider.value >= 8) {
    passwordSlider.value = Number(passwordSlider.value) + 1;
    passwordValue.textContent = passwordSlider.value;
  }
  return passwordValue;
}

passMinEl.addEventListener('click', () => {
  passwordMin();
});

passMaxEl.addEventListener('click', () => {
  passwordMax();
});

function generatePassword() {
  isAlive = true; 
  
  
  let randomNumbers1 = Math.floor(Math.random() * numbers.length);
  let randomNumbers2 = Math.floor(Math.random() * numbers.length);
  let randomNumbers3 = Math.floor(Math.random() * numbers.length);

  let randomLetters1 = Math.floor(Math.random() * letters.length);
  let randomLetters2 = Math.floor(Math.random() * letters.length);
  let randomLetters3 = Math.floor(Math.random() * letters.length);


  let randomspecial1 = Math.floor(Math.random() * specialCharacters.length);
  let randomspecial2 = Math.floor(Math.random() * specialCharacters.length);
  let randomspecial3 = Math.floor(Math.random() * specialCharacters.length);

  if (passwordSlider.value <= 10) {
  
  strongCon.innerHTML = '';
  passwordResult.textContent = numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1];

  }
  
  else if (passwordSlider.value <= 13) {
    strongCon.innerHTML = '';
    passwordResult.textContent = numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1];

  } else if (passwordSlider.value <= 17) {
    passwordResult.style.fontSize = '18px';
    strongCon.innerHTML = `<img src="check_circle_24dp_408C3E_FILL0_wght400_GRAD0_opsz24.svg" class="strong-pass" alt="">
        <p class="strong-pass-text">Strong</p>`;

    

    passwordResult.textContent = numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1];
  } else {
    strongCon.innerHTML = `<img src="check_circle_24dp_408C3E_FILL0_wght400_GRAD0_opsz24.svg" class="strong-pass" alt="">
    <p class="strong-pass-text">Strong</p>`;

    passwordResult.style.fontSize = '18px';
    passwordResult.textContent = numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1] + numbers[randomNumbers2] + numbers[randomNumbers1] + letters[randomLetters2] + specialCharacters[randomspecial1] + specialCharacters[randomspecial2] + specialCharacters[randomspecial3] + letters[randomLetters3] + numbers[randomNumbers3] + letters[randomLetters1];
  } 
}

function generateCustom() {
  isAlive = true;
  let customWords1 = Math.floor(Math.random() * customWordsArray.length);
  let customWords2 = Math.floor(Math.random() * customWordsArray.length);
  let customWords3 = Math.floor(Math.random() * customWordsArray.length);
  let customWords4 = Math.floor(Math.random() * customWordsArray.length);
  let customWords5 = Math.floor(Math.random() * customWordsArray.length);
  let customWords6 = Math.floor(Math.random() * customWordsArray.length);
  let customWords7 = Math.floor(Math.random() * customWordsArray.length);
  let customWords8 = Math.floor(Math.random() * customWordsArray.length);
  let customWords9 = Math.floor(Math.random() * customWordsArray.length);
  let customWords10 = Math.floor(Math.random() * customWordsArray.length);

  if (passwordSlider.value <= 10) {
    passwordResult.style.fontSize = '18px';
    strongCon.innerHTML = ``;
    passwordResult.textContent = customWordsArray[customWords5] + customWordsArray[customWords6] + customWordsArray[customWords8];

  } else if (passwordSlider.value <= 13) {
    strongCon.innerHTML = `<img src="check_circle_24dp_408C3E_FILL0_wght400_GRAD0_opsz24.svg" class="strong-pass" alt="">
    <p class="strong-pass-text">Strong</p>`;

    passwordResult.style.fontSize = '16px';

    passwordResult.textContent = customWordsArray[customWords7] + customWordsArray[customWords4] + customWordsArray[customWords1] + customWordsArray[customWords9];
  } else {
    strongCon.innerHTML = `<img src="check_circle_24dp_408C3E_FILL0_wght400_GRAD0_opsz24.svg" class="strong-pass" alt="">
    <p class="strong-pass-text">Strong</p>`;
    passwordResult.style.fontSize = '18px';
    passwordResult.textContent = customWordsArray[customWords3] + customWordsArray[customWords10] + customWordsArray[customWords4] + customWordsArray[customWords5] + customWordsArray[customWords7];
  }
}


passRegen.addEventListener('click', () => {
  generatePassword();
 
});

passCustom.addEventListener('click', () => {
  generateCustom();
  
});