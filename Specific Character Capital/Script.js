document.getElementById('inp').addEventListener('focus', hideErrorAndResetRadios);

function lc() {
  const input = document.getElementById('inp').value;

  // --------------------Showing Error----------------
  if (!input) {
    showError("Please input a text!");
    return;
  }
  hideError();

  document.getElementById('output').value = input.toLowerCase();
}

function uc() {
  const input = document.getElementById('inp').value;

  // --------------------Showing Error----------------
  if (!input) {
    showError("Please input a text!");
    return;
  }
  hideError();

  document.getElementById('output').value = input.toUpperCase();
}



function convert() {
  let input = document.getElementById('inp').value;

    // --------------------Showing Error----------------
  if (!input) {
    showError("Please input a text!");
    return;
  }
  hideError();


  // Split the string into an array of words
  let arr = input.split(" ");
  // Get the last word
  let lastWord = arr[arr.length - 1];
  // Capitalize the first letter of the last word
  let capital = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
   // Replace the last word in the words array
  arr[arr.length- 1] = capital;
  // Join the words back into a single string
  let result = arr.join(" ");
  document.getElementById('output').value = result;
}

function showError(message) {
  document.getElementById('errorMessage').textContent = message;
  document.getElementById('output').value = ""; // Clear the output
}

function hideError() {
  document.getElementById('errorMessage').textContent = "";
}


function hideErrorAndResetRadios() {
  hideError();

  // Deselect all radio buttons
  const radios = document.querySelectorAll('input[name="transform"]');
  radios.forEach(radio => {
      radio.checked = false;
  });
}



// function convert() {
//   let capital = document.getElementById('inp').value;
//   let result = capital.slice(0, 7) + capital.charAt(7).toUpperCase() + capital.slice(8);
//   document.getElementById('output').value = result;
// }
