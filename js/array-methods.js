const paisesLatam = [ 
    { name: "Perú", population: 33715471},
    { name: "Colombia", population: 51516562 },
    { name: "Paraguay", population: 6703799},
    { name: "Bolivia", population: 12079472},
    { name: "Guyana Francesa", population: 560230},
    { name: "Venezuela", population: 28199867},
    { name: "Suriname", population: 612985},
    { name: "Chile", population: 19493184},
    { name: "Uruguay", population: 3426260},
    { name: 'Argentina',  population: 45808747 },
    { name: "Guyana", population: 804567 },
    { name: "Brasil", population: 214326223 },
    { name: "Ecuador", population: 17797737},
];



let tableBody = document.getElementById('table-body');


pintarTabla(paisesLatam);
calcularTotalPoblacion(paisesLatam);

function pintarTabla(arrayAPintar) {

    tableBody.innerHTML = '';

    arrayAPintar.forEach((pais, indice) => {
            tableBody.innerHTML += `<tr>
                <td><strong>${indice + 1}</strong></td>
                <td>${ pais.name }</td>
                <td>${ pais.population }</td>
            </tr>`;
        })

        console.log(`DESPUES DEL MAP`, paisesLatam)
}



function calcularTotalPoblacion(paisesAContar) {
    // Contar población
    const sumaTotal = paisesAContar.reduce((acumulador, pais) => {
        const sumatoria = acumulador + pais.population;
        return sumatoria
    }, 0);
    
    // Pintarla en el div corresponiente
    console.log(`sumatoriaTotal:`, sumaTotal);
    document.querySelector('#population-number').innerHTML = sumaTotal
}

const arrayCopia = paisesLatam


function metodoMap() {
    
    const arrayNuevoMap = paisesLatam.map(function(pais) {

        const newObj = {
            name: pais.name.toUpperCase(),
            population:  Math.round(pais.population * 10  / 1000000) / 10 + 'M'
        }

        // !Solución no válida ya que se modifican los objetos del array Original
        // pais.name = pais.name.toUpperCase();
        // pais.population = Math.round(pais.population * 10  / 1000000) / 10 + 'M'

        return newObj
    });

    console.log(arrayNuevoMap)
    pintarTabla(arrayNuevoMap)
}






// //** Array.forEach => Otra forma de iterar un array
// // **No usar
// // let paisesDuplicado = paisesLatam;
// // **Opciones para copiar array y romper la referencia del original
// let paisesDuplicado = Array.from(paisesLatam)
// // let paisesDuplicado = [ ...paisesLatam ]
// // let paisesDuplicado = paisesLatam.slice()
// // let paisesDuplicado = paisesLatam.map((pais) => { return pais });

// paisesDuplicado[2] = true;
// paisesDuplicado.push(`**NUEVO`)

// console.log(`paisesLatam`, paisesLatam);
// console.log(`paisesDuplicado`, paisesDuplicado);



// // let index = 1;

function metodoFilter(evt) {
    // Frenando la busqueda si la tecla no es la que tiene codigo 13 (ENTER)
    // if(evt.keyCode !== 13) {
    //     console.log(`No apreto enter`);
    //     return;
    // }
    // const number = 30000000 //input
    const text = evt.target.value.toLowerCase();

    const paisesFiltrados = paisesLatam.filter((pais) => {
        console.log(pais)
        const filtra = pais.name.toLowerCase().includes(text);
        // const filtrados = pais.population > number
        return filtra;

    });
    pintarTabla(paisesFiltrados)
    calcularTotalPoblacion(paisesFiltrados)
}

function metodoFind(evt) {
    //Checkeo si el user apreto enter
    if(evt.keyCode !== 13) return;

    const texto = evt.target.value.toLowerCase().trim();  // ArGENtina => `argentina` === `argentina`
    const paisEncotrado = paisesLatam.find((pais)=> {
        if(texto === pais.name.toLowerCase()) {
            return true;
        }
        
        return false
    });

    if(paisEncotrado) {
        pintarTabla([ paisEncotrado ] );
        calcularTotalPoblacion([ paisEncotrado ])
    }
    // else alert(`No se encontró lo que buscaba`)
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

// Hacer un ordenamiento por nombre de manera descendente
const ordenarDesc = () => {
    paisesLatam.sort((a, b) => {
        if(a.name > b.name) return -1;
        if(a.name < b.name) return 1;
        return 0;
    });
    pintarTabla(paisesLatam)
}

function ordenarAsc() {
    paisesLatam.sort((a, b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
    });
    pintarTabla(paisesLatam)
}

for(let pais of paisesLatam) {
    console.log(`For OF:`, pais)
}
