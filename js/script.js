let nome = document.querySelector('#ipt_nome');
let altura = document.querySelector('#ipt_altura');
let sexo = document.querySelector('#select_altura');
let container = document.querySelector('#divMsg');

//Função de calcular os dados e dizer qual é o peso ideal
document.querySelector('#calcular').addEventListener('click', () => {

    limparMsg();

    if(nome.value === ''){
        container.innerHTML = `<p class="erro">Digite um nome<p>`;
    }else if(altura.value === '' || isNaN(altura.value)) {
        container.innerHTML = `<p class="erro">${nome.value}, digite sua altura<p>`;
        alert('Use um . (ponto) para separa os decimais');
    }else if(sexo.value === 'vazio') {
        container.innerHTML = `<p class="erro">${nome.value}, selecione seu sexo<p>`;
    }else{
        let gen = 0
        sexo.value = 'm' ? gen = 22 : gen = 21;
        let calculo = (gen * (Math.pow(altura.value, 2))).toFixed(2);
        container.innerHTML = `<p class="erro">${nome.value}, seu peso ideal é ${calculo}kg<p>`;
    }
});

//Função de limpar todos os inputs e menssagens
document.querySelector('#limpar').addEventListener('click', () => {
    nome.value = '';
    altura.value = '';
    sexo.value = 'vazio';
    limparMsg();
});

//Limpa menssagens
function limparMsg(){

    let elementoP = document.querySelectorAll('p');

    if(elementoP.length === 0){
        return;
    }else{
        container.textContent = '';
    }    
}

//Função que limpa input do nome
document.querySelector('#excluir_nome').addEventListener('click', () => {
    nome.value = '';
});

//Função que limpa input do altura
document.querySelector('#excluir_altura').addEventListener('click', () =>{   
    altura.value = '';
});

//Função que limpa select de sexo
document.querySelector('#excluir_sexo').addEventListener('click', () => {
    sexo.value = 'vazio';
});