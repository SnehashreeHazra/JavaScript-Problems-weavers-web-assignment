
function submitForm(){
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('#select').value;
  const tableBody = document.querySelector("#outputList tbody");

  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name}</td>
                      <td>${age}</td>
                      <td>${email}</td>
                      <td>${gender}</td>`;
  
  tableBody.appendChild(newRow);
  
  document.getElementById("userForm").reset();
}


function resetForm(){
  document.getElementById("userForm").reset();
  
  const tableBody = document.querySelector("#outputList tbody");
  tableBody.innerHTML = '';

}
