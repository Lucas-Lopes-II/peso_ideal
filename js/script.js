let nome = document.querySelector('#ipt_nome');
let altura = document.querySelector('#ipt_altura');
let sexo = document.querySelector('#select_altura');
let calcular = document.querySelector('#calcular');
let limpar = document.querySelector('#limpar');
let container = document.querySelector('#divMsg');

//Função de calcular os dados e dizer qual é o peso ideal
document.querySelector('#calcular').addEventListener('click', () => {

    limparMsg();

    if(nome.value === ''){
        container.innerHTML = `<p class="erro">Digite um nome<p>`;
    }else if(altura.value === '' || isNaN(altura.value) === true) {
        container.innerHTML = `<p class="erro">${nome.value}, digite sua altura<p>`;
        alert('Use um . (ponto) para separa os decimais');
    }else if(sexo.value === 'vazio') {
        container.innerHTML = `<p class="erro">${nome.value}, selecione seu sexo<p>`;
    }else{
        let gen = 0
        sexo.value = 'm' ? gen = 22 : gen = 21;
        let calculo = (gen * (Math.pow(altura.value, 2))).toFixed(2);
        container.innerHTML = `<p class="erro">${nome.value}, seu peso ideal é ${calculo}kg<p>`
    }
});

//Função de limpar todos os inputs e menssagens
limpar.onclick = function(){

    nome.value = '';
    altura.value = '';
    sexo.value = 'vazio';
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
limpaSexo.onclick = function() {
    sexo.value = 'vazio';
}
