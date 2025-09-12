const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let arr = document.querySelectorAll(".price");
	let sum = 0;
arr.forEach((el,i)=>{
	sum+=Number(el.innerText);
})
	
let row  = document.createElement("tr");
let col1 = document.createElement("td");
let col2 = document.createElement("td");
col1.innerText = "Total";
col2.innerText = Number(sum);
col1.classList.add("item");
col2.classList.add("price");
row.appendChild(col1);
	row.appendChild(col2);
	document.querySelector("table tbody").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

