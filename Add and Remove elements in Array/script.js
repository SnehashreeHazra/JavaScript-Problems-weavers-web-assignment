let arr = [];

function add() {
  const input = document.getElementById('input').value;

  if (input){
    arr.push(input);
    alert(`${input} is added on index ${arr.length - 1}`);
  } else {
    alert('Please enter valid Month.');
  }
  document.getElementById('input').value = ''; // Clear the input field
}


function display() {
  const output = document.getElementById('output');
  if (arr.length > 0) {
    output.innerHTML = `Added months: ${arr.join(", ")} `;
  } else {
    output.innerHTML = 'No days added.';
  }
}

function remove() {
  if (arr.length > 0) {
      const removed = arr.pop();
      alert(`${removed} is removed from index ${arr.length}`);
  } else {
      alert('No days to remove.');
  }
  display(); // Update display after removal
}
