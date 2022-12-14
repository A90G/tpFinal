fetch('https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
        let tbody = document.getElementById('tab');
            
        let tr = document.createElement('tr');
        let thID = document.createElement('th');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdBirthday = document.createElement('td');
        let tdEmail = document.createElement('td');
            
        tdName.innerText = data[i].name;
        tdCity.innerText = data[i].city;
        tdBirthday.innerText = data[i].birthday;
        tdEmail.innerText = data[i].email;
        thID.innerText = data[i].id;
    
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdCity);
        tr.appendChild(tdBirthday);
        tr.appendChild(tdEmail);
        tr.appendChild(thID);
    }
  })
  .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))

/*
let inputID = document.getElementById('id');
let btnSearch = document.getElementById('search');
let inputName = document.getElementById('name');
let inputCity = document.getElementById('city');
let inputBtd = document.getElementById('birthday');
let inputEmail = document.getElementById('email');
let btnEdit = document.getElementById('edit');
let btnDelete = document.getElementById('delete');

btnEdit.addEventListener('click', editEmployee);

function editEmployee() {
  let tr = document.createElement('tr');
  let tdName = document.createElement('td');
  let tdCity = document.getElementById('city');
  let tdBtd = document.getElementById('birthday');
  let tdEmail = document.getElementById('email');

  tdName.innerText = inputName.value;
  tdCity.innerText = inputCity.value;
  tdBtd.innerText = inputBirthday.value;
  tdEmail.innerText = inputEmail.value;

  -- Z acá no va, debería de buscar el quie yo le pida y reemplazar
  
  let tbody = document.getElementById('tab');
  tbody.appendChild(tr);
  tr.appendChild(tdName);
  tr.appendChild(tdSurname);
}*/
