const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn')
const addBtn = document.querySelector('.addBtn');
const subBtn = document.querySelector('.subBtn')
const input = document.getElementById('myInput');


let count = 0;


// update counter


function updataCounter(){
    counter.textContent = count;
}

// increment 
 incrementBtn.addEventListener('click', () => {
    count++
    updataCounter()
 })

 // decourment

 decrementBtn.addEventListener('click', () => {
    count--;
    updataCounter()
 })

 //reset

 resetBtn.addEventListener('click', () => {
    count = 0;
    updataCounter()

 })

 addBtn.addEventListener('click', () => {
   count += Number(input.value)
   updataCounter()
})
subBtn.addEventListener('click', () => {
   count -= Number(input.value)
   updataCounter()
})

input.addEventListener('click', function(){
   input.value = 0;
   updataCounter()
})


