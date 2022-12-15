const api = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees';

function newList(data){   
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdBday = document.createElement('td');
        let tdMail = document.createElement('td');
        let tdEdit = document.createElement('td');
        let tdDelete = document.createElement('td');
        
        tdId.innerText = element.id;
        tdName.innerText = element.name;
        tdCity.innerText = element.city;
        tdBday.innerText = element.birthday;
        tdMail.innerText = element.email;
      
        tdEdit.innerHTML = `<button type = "button" id = "${element.id}" onclick = "edit('${element.id}','${element.name}','${element.city}','${element.birthday}','${element.email}')" class = "btn btn-dark">Edit</button>`;
        tdDelete.innerHTML = `<button type = "button" id = "${element.id}" onclick = "deleteEmployee('${element.id}')" class = "btn btn-light">Delete</button>`;
         
        let tbody = document.getElementById('tab');

        tr.id = 'row'+ element.id;

        tbody.appendChild(tr);
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdCity);
        tr.appendChild(tdBday);
        tr.appendChild(tdMail);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
    }
}

function edit(id, name, city, birthday, email) {

    let idForm = document.getElementById('idForm');
    idForm.value = id;

    let nameForm = document.getElementById('nameForm');
    let cityForm = document.getElementById('cityForm');
    let birthdayForm = document.getElementById('birthdayForm');
    let emailForm = document.getElementById('emailForm');  
    nameForm.value = name;
    cityForm.value = city;
    birthdayForm.value = birthday;
    emailForm.value = email;
//    togglear();    
}
/*function togglear(){
    document.querySelector(".idForm").addEventListener('click',()=>{
    classList.toggle("hide");
});
}*/
function deleteEmployee(id){
   
    let out = document.getElementById('row'+ id).remove();
    alert(`Delete successfully: ${id }`);

}

function add(){

    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdBday = document.createElement('td');
    let tdMail = document.createElement('td');
    let tdEdit = document.createElement('td');
    let tdDelete = document.createElement('td');

    let tabla = document.getElementById('tab');
    let newId = parseInt(tabla.lastChild.firstChild.innerText)+ 1;

    tdId.innerText = newId;
    
    let nameF = document.getElementById('nameForm');
    tdName.innerText = nameF.value;

    let cityF = document.getElementById('cityForm');
    tdCity.innerText = cityF.value;

    let birthdayF = document.getElementById('birthdayForm');
    tdBday.innerText = birthdayF.value;

    let emailF = document.getElementById('emailForm');
    tdMail.innerText = emailF.value;

    tdEdit.innerHTML = `<button type = "button" id = "${newId}" onclick = "edit('${newId}','${nameF.value}','${cityF.value}','${birthdayF.value}','${emailF.value}')" class = "btn btn-dark">Edit</button>`;
    tdDelete.innerHTML = `<button type = "button" id="${newId}" onclick = "deleteEmployee('${newId}')" class = "btn btn-light">Delete</button>`;
   
    let tbody = document.getElementById('tab');

    tr.id = 'row'+ newId;

    tbody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCity);
    tr.appendChild(tdBday);
    tr.appendChild(tdMail);
    tr.appendChild(tdEdit);
    tr.appendChild(tdDelete);
}

function save(){

    let idF = document.getElementById('idForm');   
    let nameF = document.getElementById('nameForm');
    let cityF = document.getElementById('cityForm');
    let birthdayF = document.getElementById('birthdayForm');
    let emailF = document.getElementById('emailForm');

    let tr = document.getElementById('row'+ idF.value);

    let id =  tr.firstElementChild;
    id.nextElementSibling.innerText = nameF.value;

    let name = id.nextElementSibling;
    name.nextElementSibling.innerText = cityF.value;

    let city = name.nextElementSibling;
    city.nextElementSibling.innerText = birthdayF.value;
    
    let birthday = city.nextElementSibling;
    birthday.nextElementSibling.innerText = emailF.value;

}

fetch(api)
    .then(response => response.json())
    .then(data => {
        newList(data);   
    })
  
    .catch(error => console.error(error))

/*  POTENCIALES MEJORAS - SI TUVIERA MÁS TIEMPO -:
1. DESPLEGAR UN FORMULARIO APARTE PARA EDITAR,COMO PEDÍA LA CONSIGNA.
2. O BIEN, TOGGLEAR EL ÚLTIMO DIV DEL DOM PARA QUE APAREZCA ÚNICAMENTE CUANDO SE BUSCA EDITAR UN CAMPO.
3. AGREGAR MÁS ESTILOS.
4. AGREGAR Y PROBAR LAS SIGUIENTES FUNCIONALIDADES EN SAVE():
let btnSave = document.querySelector('.btnSave');
btnSave.addEventListener('click', ()=> {
validateName();
validateCity();
validateBirthday();
validateEmail();
})

function validateName() {
let nameF = document.querySelector('.name').value;
    if ((nameF! = '') && (nameF.length >= 3) && (nameF.length <= 20) && (nameF != 'undefined')){
        let id =  tr.firstElementChild;
        id.nextElementSibling.innerText = nameF.value;
    } else {
        alert('Not valid: Name');
    }
}
function validateCity() {
let cityF = document.querySelector('.city').value;
    if ((cityF != '') && (cityF.length >= 3) && (cityF.length <= 20) && (cityF != 'undefined')) {
        let name = id.nextElementSibling;
        name.nextElementSibling.innerText = cityF.value;    
    } else {
        alert('Not valid: city');
    }
}
function validateBirthday() {
let birthdayF = document.querySelector('.mail').value;
    if (birthdayF != '') { 
        let city = name.nextElementSibling;
    city.nextElementSibling.innerText = birthdayF.value;
    } else {
        alert('Not valid: Birthday');
    }
}
function validateEmail() {
let emailF = document.querySelector('.mail').value;
    if (emailF != '') { 
        let birthday = city.nextElementSibling;
        birthday.nextElementSibling.innerText = emailF.value;
    } else {
        alert('Not valid: Email');
    }
}
}
*/
