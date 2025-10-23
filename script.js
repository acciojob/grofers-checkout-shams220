const sumbutton = document.createElement("button");
sumbutton.textContent = "find sum";
sumbutton.classList.add("sumbtn");

const row = document.createElement('tr');
const col1 = document.createElement('td');
const col2 = document.createElement('td');

const tablebody = document.querySelector('tbody');

row.appendChild(col1);
row.appendChild(col2);
tablebody.appendChild(row)
document.querySelector('body').appendChild(sumbutton)
col1.textContent = "total";


const prices = document.querySelectorAll('.price')
let total = 0;
sumbutton.addEventListener('click',()=>{
	 total = [...prices].reduce((a,b)=>{
	return a+Number(b.textContent);
},0)
	document.getElementById('ans').textContent = String(total);
 
})
// const prices = document.querySelectorAll('.price');

// const sumBtn = document.createElement('button');
// sumBtn.classList.add('sumBtn');
// sumBtn.textContent = "Click me";
// document.body.appendChild(sumBtn); 

// const sumFn = () => {
//   const total = [...prices].reduce((a, b) => a + Number(b.textContent), 0);

//   const row = document.createElement('tr');
//   const col1 = document.createElement("td");
//   const col2 = document.createElement('td');

//   col1.classList.add("item");
//   col2.classList.add("price");

//   col1.textContent = "Total sum";
//   col2.textContent = total;

//   row.appendChild(col1);
//   row.appendChild(col2);

//   document.querySelector('table').appendChild(row);
// };

// sumBtn.addEventListener('click', sumFn);
