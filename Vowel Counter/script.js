document.getElementById('input').addEventListener('focus', hideError);


function count(){
  const input = document.getElementById("input").value;

  

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (!input) {
    showError("Please insert a text!");
    return;
  }
  hideError();
  const vowelCount = input
                          .split("")
                          .filter((char) => vowels.includes(char))
                          .length;

  document.getElementById('result').innerText = `Total number of vowels: ${vowelCount}`;
}


function showError(message) {
  document.getElementById('errorMessage').textContent = message;
}

function hideError() {
  document.getElementById('errorMessage').textContent = "";
}
