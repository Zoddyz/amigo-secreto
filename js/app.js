//Ler os nomes No adicionar Jogar para amigos incluidos
// No sortear fazer o sorteio - Joga no campo sorteio
// No reiniciar Limpar os campos sorteio, nome, e amigos
let lista = [];
function adicionar(){
    let nome = document.getElementById('nome-amigo');
    if(nome.value == ''){
        alert('Infome um nome');
        return;
    }
    if(lista.includes(nome.value)){
        alert('Nome ja Adicionado');
        return;
    }
    let amigos = document.getElementById('lista-amigos'); 
    lista.push(nome.value);
    if(amigos.textContent == ''){
        amigos.textContent = nome.value;
    } else {
        amigos.textContent = amigos.textContent + ', ' + nome.value;
    }
    nome.value = '';
}

function sortear(){
    if(lista.length < 4){
        alert('Adiciona pelo menos 4 participantes');
        return;
    }
    embaralhar(lista);
    let sorteio = document.getElementById('lista-sorteio');
    for(let i=0; i<lista.length; i++){
        if(i == lista.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + lista[i] + '-->' + lista[0] +'<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + lista[i] + '-->' + lista[i+1] +'<br>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    lista = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}