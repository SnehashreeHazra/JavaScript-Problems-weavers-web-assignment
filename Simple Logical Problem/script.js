// ********************DYNAMIC TABLE*************************************
function change(){
  const input = document.getElementById("inp").value;

  for(let i=1; i<=10; i++){
    document.getElementById("demo").innerHTML += `${input} x ${i} = ${input * i}<br/>`;
  }
}



// **********************REPLACE & UPPERCASE********************************
function upperCase(para){
  let nm = para.replace("snehashree", "sneha").toUpperCase();
  console.log(nm);
}

upperCase("my name is snehashree");



// **********************FIND DUPLICATE IN THE ARRAY******************
const arr = [2,12,58,98,32,12,98,58,32,2,10,10,64,35,69];
const arr1 = [];

function findDuplicate(){
  for(let i=0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i] === arr[j]){
        arr1.push(arr[i]);
      }
    }
  }
  console.log(arr1);
}

findDuplicate();





// *********************FIND UNIQUE NUMBER THAT OCCUR ONCE**********************
const arr = [2, 4, 6, 4, 2, 5];
const arr1 = [];

function findUnique(){
  for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }

    if(count === 1){
      arr1.push(arr[i]);
    }
  }
  console.log(arr1);
}

findUnique();





// ************************REMOVE DUPLICATE*************************
const arr = [2,12,58,98,32,12,98,58,32,2,10,10,64,35,69];

function removeDuplicate(){
  // ----------SORTING ARRAY--------
  arr.sort((a,b) => a-b);
  // ------------NEW ARRAY-------------
  const arr1 = [];
  let j = 0;
  // ------------TRAVERSE THROUGH THE SORTED ARRAY------------
    for(let i = 0; i<arr.length; i++){
      if(arr[i] !== arr[i+1]){
        j++;
        arr1[j] = arr[i];
      }
    }
    console.log(arr1);
  }

removeDuplicate();





// *******************PRINT 13'S TABLE*******************
// for(let i=1; i<=10; i++){
//   console.log(` x ${i} = ${13 * i}`);
// }









// --------------------PALINDROME NUMBER----------------------
const number = 121;

function isPalindrome(number){
  const str = number.toString();
  const reverseStr = str.split("").reverse().join("");
  if(reverseStr.endsWith("-")){
    reverseStr = "-" + reverseStr;
    return parseInt(reverseStr);
  } else {
    return parseInt(reverseStr);
  } 
}

if(isPalindrome(number)){
  console.log("Number is palindrome!")
} else{
  console.log("Number is not palindrome!")
}





// ***********************SUM OF ALL NUMBER*********************
// const arr = [2, 4, 6, 4, 2, 5];
// let sum = 0;

// function add(){
//   for(let i=0; i<arr.length; i++){
//     sum = sum+arr[i];
//   }
//   console.log(sum);
// }

// add();
