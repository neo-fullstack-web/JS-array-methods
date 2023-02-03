const paisesLatam = [ 
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Ecuador",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
];

// **No usar
// let paisesDuplicado = paisesLatam;
// **Opciones para copiar array y romper la referencia del original
let paisesDuplicado = Array.from(paisesLatam)
// let paisesDuplicado = [ ...paisesLatam ]
// let paisesDuplicado = paisesLatam.slice()
// let paisesDuplicado = paisesLatam.map((pais) => { return pais });


paisesDuplicado[2] = true;
paisesDuplicado.push(`**NUEVO`)

console.log(`paisesLatam`, paisesLatam);
console.log(`paisesDuplicado`, paisesDuplicado);


let tableBody = document.getElementById('table-body');
// let index = 1;

//** Array.forEach => Otra forma de iterar un array

pintarTabla(paisesLatam)

function metodoMap() {
    
    const arrayNuevoMap = paisesLatam.map(function(pais) {
        const paisMay = pais.toUpperCase();
        return paisMay
    });

    pintarTabla(arrayNuevoMap)
}

function metodoFilter(evt) {
    // Frenando la busqueda si la tecla no es la que tiene codigo 13 (ENTER)
    // if(evt.keyCode !== 13) {
    //     console.log(`No apreto enter`);
    //     return;
    // }
    const text = evt.target.value.toLowerCase();
    const paisesFiltrados = paisesLatam.filter((pais) => {
        const filtra = pais.toLowerCase().includes(text);
        return filtra;
    });

    pintarTabla(paisesFiltrados)

}

function metodoFind(evt) {
    //Checkeo si el user apreto enter
    if(evt.keyCode !== 13) return;

    const texto = evt.target.value.toLowerCase().trim();  // ArGENtina => `argentina` === `argentina`
    const paisEncotrado = paisesLatam.find((pais)=> {
        if(texto === pais.toLowerCase()) {
            return true;
        }
        
        return false
    });

    if(paisEncotrado) alert(`Se encontró el país que busca`)
    else alert(`No se encontró lo que buscaba`)
}

function metodoFindIndex(evt) {
    if(evt.keyCode !== 13) return;
    const texto = evt.target.value.toLowerCase().trim();

    const indice = paisesLatam.findIndex((pais) => {
        if(texto === pais.toLowerCase()) {
            return true;
        }

        return false
    })
    console.log(indice)
    if(indice >= 0) {
        //Método slice para borrar uno o más elementos de un array
        paisesLatam.splice(indice, 1);
        evt.target.value = '';
    }
    pintarTabla(paisesLatam)
}


function pintarTabla(arrayAPintar) {
    tableBody.innerHTML = '';
    arrayAPintar.forEach((pais, indice) => {
        tableBody.innerHTML += `<tr>
            <td><strong>${indice + 1}</strong></td>
             <td>${ pais }</td>
         </tr>`;
    })
}


// for(let i = 0; i < paisesLatam.length; i++) {

    

// }