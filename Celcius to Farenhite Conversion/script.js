
document.getElementById('temperature').addEventListener('focus', hideError);

function convert() {
  var from = document.getElementById('fromUnit').value;
  var to = document.getElementById('toUnit').value;
  var temp = parseFloat(document.getElementById('temperature').value);


   // --------------------Showing Error----------------
   if (!temp) {
    showError("Please insert a temperature!");
    return;
  }
  hideError();


  var convartedValue;
  var resultUnit;

  switch(from){
    case 'C':
      if(to === 'F'){
        convartedValue = (temp * 9/5) + 32;
        resultUnit = 'F';
      } else if(to === 'K'){
        convartedValue = temp + 273.15;
        resultUnit = 'K';
      } else {
        convartedValue = temp;
        resultUnit = 'C';
      }
      break;

      case 'F':
      if(to === 'C'){
        convartedValue = (temp - 32) * 5/9;
        resultUnit = 'C';
      } else if(to === 'K'){
        convartedValue = (temp - 32) * 5/9 + 273.15;
        resultUnit = 'K';
      } else {
        convartedValue = temp;
        resultUnit = 'F';
      }
      break;

      case 'K':
      if(to === 'C'){
        convartedValue = (temp - 273.15);
        resultUnit = 'C';
      } else if(to === 'F'){
        convartedValue = (temp - 273.15) * 9/5 + 32;
        resultUnit = 'F';
      } else {
        convartedValue = temp;
        resultUnit = 'K';
      }
      break;
  }

  document.getElementById("result").value = convartedValue.toFixed(2)+ ' ' + resultUnit;
}

function showError(message) {
  document.getElementById('errorMessage').textContent = message;
  document.getElementById('result').value = ""; // Clear the output
}

function hideError() {
  document.getElementById('errorMessage').textContent = "";
}
