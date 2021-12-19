let nome = document.querySelector('#ipt_nome');
let altura = document.querySelector('#ipt_altura');
let sexo = document.querySelector('#select_altura');
let calcular = document.querySelector('#calcular');
let limpar = document.querySelector('#limpar');
let container = document.querySelector('#divMsg');

//Função de calcular os dados e dizer qual é o peso ideal
calcular.onclick = function (){
    limparMsg();
    calcularPeso();

    if(nome.value === ''){
        let msg = document.createTextNode('Digite um nome');
        let pElement = document.createElement('p');
        pElement.setAttribute('class', 'erro');
        pElement.appendChild(msg);
        container.appendChild(pElement);
    }else if(altura.value === '' || isNaN(altura.value) === true) {
        let msg = document.createTextNode('Digite a altura');
        let pElement = document.createElement('p');
        pElement.setAttribute('class', 'erro');
        pElement.appendChild(msg);
        container.appendChild(pElement);
    }else if(sexo.value === 'vazio') {
        let msg = document.createTextNode('Selecione um sexo');
        let pElement = document.createElement('p');
        pElement.setAttribute('class', 'erro');
        pElement.appendChild(msg);
        container.appendChild(pElement);
    }else{
        let gen = 0
        sexo.value = 'm' ? gen = 22 : gen = 21;
        let calculo = (gen * (Math.pow(altura.value, 2))).toFixed(2); 
        let msg = document.createTextNode(`${nome.value}: seu peso ideal é ${calculo}kg`);
        let pElement = document.createElement('p');
        pElement.setAttribute('class', 'pesoIdeal');
        pElement.appendChild(msg);
        container.appendChild(pElement);
    }
}

//Função de limpra todos os inputs e menssagens
limpar.onclick = function(){
    nome.value = '';
    altura.value = '';
    sexo.value = 'vazio'
    limparMsg();
}

//Limpa menssagens
function limparMsg(){
    let elementoP = document.querySelectorAll('p');
    if(elementoP.length === 0){
        return;
    }else{
        container.textContent = '';
    }    
}


let limpaNome = document.querySelector('#excluir_nome');
let limpaAltura = document.querySelector('#excluir_altura');
let limpaSexo = document.querySelector('#excluir_sexo');

//Função que limpa input do nome
limpaNome.onclick = function() {
    nome.value = '';
}

//Função que limpa input do altura
limpaAltura.onclick = function() {
    altura.value = '';
}

//Função que limpa select de sexo
limpaNome.onclick = function() {
    sexo.value = 'vazio';
}