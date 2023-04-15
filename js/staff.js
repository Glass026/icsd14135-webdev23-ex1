const employees = [
    { name: 'Mitrou Lilian', category: 'professor', empkey: 1, hyperlink: "http://127.0.0.1:5500/icsd/professor.html"  },
    { name: 'Vouyioukas Demosthenes', category: 'professor' , empkey: 2},
    { name: 'Charalabidis Yannis', category: 'professor' , empkey: 3},
    { name: 'Stamatatos Efstathios', category: 'professor' },
    { name: 'Skianis Charalabos', category: 'professor' },
    { name: 'Loukis Euripides', category: 'professor' },
    { name: 'Kormentzas Georgios', category: 'professor' },
    { name: 'Kokolakis Spyros', category: 'professor' },
    { name: 'Karyda Maria', category: 'professor' },
    { name: 'Kambourakis Georgios', category: 'professor' },
    { name: 'Kavallieratou Ergina', category: 'professor' },
    { name: 'Vlachou Akrivi', category: 'associate professor' },
    { name: 'Goumopoulos Christos', category: 'associate professor' },
    { name: 'Kofinas Georgios', category: 'associate professor' },
    { name: 'Kritikos Kiriakos', category: 'associate professor' },
    { name: 'Konstantinou Elisavet', category: 'associate professor' },
    { name: 'Kostoulas Theodoros', category: 'associate professor' },
    { name: 'Mesaritakis Charis', category: 'associate professor' },
    { name: 'Symeonidis Panagiotis', category: 'associate professor' },
    { name: 'Kalligeros Emmanouil', category: 'assistant professor' },
    { name: 'Kaporis Alexis', category: 'assistant professor' },
    { name: 'Leros Asimakis', category: 'assistant professor' },
    
];

function createEmployeeList() {
    let ul = document.getElementById('employeeList');
    employees.forEach(employee => {
        let li = document.createElement('li');
        li.setAttribute('data-category', employee.category);
        li.textContent = employee.name;
        ul.appendChild(li);
    });
}

function filterEmployees() {
    let select = document.getElementById('categoryFilter');
    let filter = select.value;
    let ul = document.getElementById('employeeList');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let category = li[i].getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

createEmployeeList();