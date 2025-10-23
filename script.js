const prices = document.querySelectorAll('.price');

const sumBtn = document.createElement('button');
sumBtn.classList.add('sumBtn');
sumBtn.textContent = "Click me";
document.body.appendChild(sumBtn); 

const sumFn = () => {
  const total = [...prices].reduce((a, b) => a + Number(b.textContent), 0);

  const row = document.createElement('tr');
  const col1 = document.createElement("td");
  const col2 = document.createElement('td');

  col1.classList.add("item");
  col2.classList.add("price");

  col1.textContent = "Total sum";
  col2.textContent = total;

  row.appendChild(col1);
  row.appendChild(col2);

  document.querySelector('table').appendChild(row);
};

sumBtn.addEventListener('click', sumFn);
