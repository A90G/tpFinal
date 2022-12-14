const api = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees';

function newList(data){   
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        // creo los elementos dentro del tbody
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdBday = document.createElement('td');
        let tdMail = document.createElement('td');
        let tdEdit = document.createElement('td');
        let tdDelete = document.createElement('td');
        // le inserto los valores al tr y td
        tdId.innerText = element.id;
        tdName.innerText = element.name;
        tdCity.innerText = element.city;
        tdBday.innerText = element.birthday;
        tdMail.innerText = element.email;
        tdEdit.innerHTML = `<button type="button" id="${element.id}" onclick="edit('${element.id}','${element.name}','${element.city}', '${element.birthday}','${element.email}')" class="btn btn-dark">Edit</button>`;
        tdDelete.innerHTML = `<button type="button" id="${element.id}" onclick="deleteEmployee('${element.id}')" class="btn btn-light">Delete</button>`;
        // agarro el tbody y voy insertando en el html 
        let tbody = document.getElementById('tab');

        tr.id = 'row'+element.id;

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
    
    // aqui leo las id del formulario
    let nameForm = document.getElementById('nameForm');
    let cityForm = document.getElementById('cityForm');
    let birthdayForm = document.getElementById('birthdayForm');
    let emailForm = document.getElementById('emailForm');  
    nameForm.value = name;
    cityForm.value = city;
    birthdayForm.value = birthday;
    emailForm.value = email;
        
}

function deleteEmployee(id){
   
    let out = document.getElementById('row'+id).remove();
    alert(`Delete successfully: ${id }`);

}

function save(){

     let idF = document.getElementById('idForm');   
     let nameF = document.getElementById('nameForm');
     let cityF = document.getElementById('cityForm');
     let birthdayF = document.getElementById('birthdayForm');
     let emailF = document.getElementById('emailForm');

     // le inserto los valores al tr y td
     let tr = document.getElementById('row'+ idF.value);

     let id =  tr.firstElementChild;
     id.nextElementSibling.innerText = nameF.value;

     let name= id.nextElementSibling;
     name.nextElementSibling.innerText = cityF.value;

     let city = name.nextElementSibling;
     city.nextElementSibling.innerText = birthdayF.value;
     
     let birthday = city.nextElementSibling;
     birthday.nextElementSibling.innerText = emailF.value;


}

function agregar(){

    // creo los elementos dentro del tbody
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdBday = document.createElement('td');
    let tdMail = document.createElement('td');
    let tdEdit = document.createElement('td');
    let tdDelete = document.createElement('td');

    // le inserto los valores al tr y td
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


    tdEdit.innerHTML = `<button type="button" id="${newId}" onclick="edit('${newId}','${nameF.value}','${cityF.value}','${birthdayF.value}','${emailF.value}')" class="btn btn-dark">Edit</button>`;
    tdDelete.innerHTML = `<button type="button" id="${newId}" onclick="deleteEmployee('${newId}')" class="btn btn-light">Delete</button>`;
    // agarro el tbody y voy insertando en el html 
    let tbody = document.getElementById('tab');

    tr.id = 'row'+newId;

    tbody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCity);
    tr.appendChild(tdBday);
    tr.appendChild(tdMail);
    tr.appendChild(tdEdit);
    tr.appendChild(tdDelete);
}

fetch(api)
    .then(response => response.json())
    .then(data => {
        newList(data);   
    })
  
    .catch(error => console.error(error))

/*const api = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees';

let arrayData;


fetch(api)
    .then(response => response.json())
    .then(data => {
        arrayData = data
    /*console.log(`Name: ${data.results[0].name} City: ${data.results[0].city} Birthday: ${data.results[0].birthday} Email: ${data.results[0].email} ID: ${data.results[0].id}`)
    for (let i = 0; i < data.results.length; i++) {
      const element = data.results[i];
      console.log(element);
   for (let i = 0; i < arrayData.length; i++) {
        //let arrayData = data[i];
        //console.log(arrayData)
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
      
      let btnSearch = document.getElementById('search');
      let btnEdit = document.getElementById('edit');
      let btnDelete = document.getElementById('delete');
      
      btnEdit.innerText = "Edit";
      btnDelete.innerText = "Delete";
  
      btnEdit.addEventListener("click", () => {
        let edit = btnEdit.parentElement;
        edit = edit.childNodes
        if (btnEdit.innerText == "Editar") {
            editar(edit);
            btnEdit.innerText = "Aceptar";
        } else {
            guardarCambio(edit)
            btnEdit.innerText = "Editar";
        }
    });
    //añadiendo funcionalidad eliminar
      btnDelete.addEventListener("click", () => {
          tr.remove();
      });

    function editar(filas) {
        filas.forEach(elemento => {
            if (elemento.className === "edit") {
                let celdasEditables = document.createElement("input");
                celdasEditables.value = elemento.innerText;
                elemento.replaceWith(celdasEditables);
                celdasEditables.classList.add("edit")
            }
        })
    }

function guardarCambio(filas) {
    filas.forEach(elemento => {
        if (elemento.className === "edit") {
            let celdaFinal = document.createElement("td");
            celdaFinal.innerText = elemento.value;
            elemento.replaceWith(celdaFinal);
            celdaFinal.classList.add("edit")
        };
    });
};
}
})
  .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))

let inputID = document.getElementById('id');
let btnSearch = document.getElementById('search');
let inputName = document.getElementById('name');
let inputCity = document.getElementById('city');
let inputBtd = document.getElementById('birthday');
let inputEmail = document.getElementById('email');
let btnEdit = document.getElementById('edit');
let btnDelete = document.getElementById('delete');


  




*/
