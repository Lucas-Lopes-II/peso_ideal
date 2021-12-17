let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let sexo = document.querySelector('#sexo');
let calcular = document.querySelector('#calcular');
let limpar = document.querySelector('#limpar');
let container = document.querySelector('#container');

//Função de calcular os dados e dizer qual é o peso ideal
calcular.onclick = function (){
    limparMsg();

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
    }else if(sexo.value == 'vazio') {
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

limpar.onclick = function(){
    nome.value = '';
    altura.value = '';
    sexo.value = 'vazio'
    limparMsg();
}

function limparMsg(){
    let elementoP = document.querySelectorAll('p');

    for(let i = 0; i < elementoP.length; i){
        container.removeChild(elementoP[i]);
    }
}