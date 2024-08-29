// ********************************EVEN & ODD****************************
function isCheck() {
  let a = document.getElementById("oddEven").value;

  if(a % 2 === 0){
    document.getElementById("demo").innerHTML = `Yes!! ${a} is an Even Number!`
  } else {
    document.getElementById("demo").innerHTML = `No!! ${a} is an Odd Number!`
  }
}
