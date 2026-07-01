  let counter = document.getElementById("counter");
      let incrementBtn = document.getElementById('incrementBtn');
      let decrementBtn = document.getElementById('decrementBtn');
      let resetBtn = document.getElementById('resetBtn');
      let input = document.getElementById('myInput');
      let addBtn = document.querySelector('.addBtn');
      let subBtn = document.getElementsByClassName('subBtn');
      let count = 0;

      // update counter
      function updateCounter(){
        counter.textContent = count;
      }


      // increment
      incrementBtn.addEventListener('click',function(){
        count++;
        updateCounter();
      })


       // decourment
      decrementBtn.addEventListener('click',function(){
        count--;
        updateCounter();
      })

      //reset
      resetBtn.addEventListener('click', function(){
        count = 0;
        updateCounter();
      })

      addBtn.addEventListener('click',function(){
        count += Number(input.value);
        updateCounter();
      })
      subBtn.addEventListener('click',function(){
        count -= Number(input.value);
        updateCounter();
      })