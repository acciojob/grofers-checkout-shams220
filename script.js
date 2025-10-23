
const prices = document.querySelectorAll('.price')
const total = [...prices].reduce((a,b)=>{
	return a+ Number(b.textContent);
},0)

const row = document.createElement('tr');
const col1 = document.createElement("td");
const col2 = document.createElement('td');

col1.classList.add("item");
col2.classList.add("price");

row.appendChild(col1)
row.appendChild(col2)

col1.textContent = "Total sum";
col2.textContent = total;

document.querySelector('table').appendChild(row);



