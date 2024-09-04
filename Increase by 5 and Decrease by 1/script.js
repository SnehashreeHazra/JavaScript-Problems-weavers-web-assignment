        let number = 0;
        const valueDisplay = document.getElementById('value'); 
        const msgDisplay = document.getElementById('message');   


      function increase(){
        number += 5;
        valueDisplay.textContent = number;
      }

      function decrease(){
        if(number > 0){
          number -= 1;
        } else {
          msgDisplay.textContent = "The  counter don't show negative value!"
        }
        valueDisplay.textContent = number;
      }

      function reset(){
        number = 0;
        valueDisplay.textContent = number;
        msgDisplay.textContent = "";
      }
