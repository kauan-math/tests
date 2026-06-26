export function gerarPar() {
    return Math.floor(Math.random() * 2);
}

export function gerarImpar() {
    let numero = Math.floor(Math.random());
    return numero % 2 ? numero : numero + 1;
}

export function gerarNegativo() {
    return Math.floor(Math.random() * -1);   
}