//Definindo o Array de tarefas
const tarefas = [
    {
        id: 1,
        texto: "Ligar para o contatinho",
        feita: true
    },
    {
        id: 2,
        texto: "Comprar presentes dos dias dos profes!",
        feita: false
    },
    {
        id:3,
        texto: "Me inscrever para vaga de dev front",
        feita: false
    }
];

const campo = document.getElementById("texto");
const lista = document.getElementById("task-list");
const form = document.getElementById("form");

campo.addEventListener("click", ()=>{console.log("alou")})
lista.addEventListener("click", mostrarTarefas)
form.addEventListener("click", ()=>{console.log("uii")})

function mostrarTarefas(){
    // 1 - Limpar o conteúdo da lista (ul)
    lista.innerHTML = "";
    // 2 - Para cada tarefa...

    for(let t of tarefas){
        //  2a - criar um elemento li (document.createElement)
        let li = document.createElement("li");

        //  2b - adicionar o conteúdo do li (vide o html do li, inneHTML)
        li.innerHTML = `
        <input type="checkbox" id="check_${t.id}">
				<label for="check_${t.id}">${t.texto}</label>
				<i class="material-icons" onclick="deleteTarefas(${t.id})">delete</i>
        `

        //  2c - adicionar o elemento li na lista (ul)
        lista.appendChild(li) 
    }
}
function deleteTarefas(id){
    console.log(id);
}    
function addTarefas(){}

mostrarTarefas();