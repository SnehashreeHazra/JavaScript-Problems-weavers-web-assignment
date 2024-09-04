// ********************USING CALLBACK FUNCTIONS*************************

document.getElementById("btn").addEventListener("click",function() {
  updateMessage(processText);
});

function processText(inp) {
  let firstSlice = inp.slice(0, 3);
  let lastSlice = inp.slice(-3);
  if (inp.length > 5) {
    return firstSlice + lastSlice;
  } else {
    return inp;
  }
}

function updateMessage(callback) {
  let inp = document.getElementById("input").value;
  let msg = document.getElementById("message");
  let result = callback(inp);
  msg.innerHTML = result;
}

function reset(){
  document.getElementById("input").value = "";
  document.getElementById("message").innerHTML = "";
}
