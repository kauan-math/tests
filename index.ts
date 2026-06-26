export function soma (number1: number, number2: number) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Me envie numeros!";
  }
  return number1 + number2;
}

export function fibonacci (quantity: number) {
  
  if(quantity < 0) return "Me envie um número positivo!";
  if(quantity  === 0) return [];
  if(quantity === 1) return [1];
  if(quantity % 1) return "Me envie um número inteiro!";
  if(quantity > 50) return "me de um número menor ou igual a 50!";

  const sequencia: number[] = [1, 1];

  while (sequencia.length < quantity) {
    const ultimo = sequencia[sequencia.length - 1];
    const penultimo = sequencia[sequencia.length - 2];

    sequencia.push(ultimo! + penultimo!);
  }

  return sequencia;
}

export function media(a: number, b: number): number {
    return (a + b) / 2;
}

export function ehPar(number: number) {
  if (number % 2 === 0) {
    return "É par!";
  }
  return "É impar!";
}

export function maior(number1: number, number2: number) {
    return number1 > number2 ? number1 : number2;
}

export function menor(number1: number, number2: number) {
    return number1 < number2 ? number1 : number2;
}

export function aprovado(nota: number) {
    return nota >= 7;
}

export function categoriaIdade(idade: number) {
    if (idade < 12) return "criança";
    if (idade < 18) return "adolescente";
    if (idade < 60) return "adulto";
    return "idoso";
}

export function contarCaracteres(texto: string, letra: string) {
    let contador = 0;

    for (const caractere of texto) {
        if (caractere === letra) {
            contador++;
        }
    }

    return contador;
}

export function contarVogais(texto: string) {
    let contador = 0;
    const vogais = "aeiouAEIOU";

    for (const caractere of texto) {
        if (vogais.includes(caractere)) {
            contador++;
        }
    }

    return contador;
}

export function maiorDaLista(numeros: number[]) {
    return Math.max(...numeros);
}

export function MediaDaLista(numeros: number[]) {
    let soma = 0;

    for (const numero of numeros) {
        soma += numero;
    }

    return soma / numeros.length;
}

export function contagemRegressiva(quantidade: number) {
    const resultado = [];

    for (let i = quantidade; i >= 0; i--) {
        resultado.push(i);
    }

    return resultado;
}

export function fatorial(numero: number) {
    let resultado = 1;

    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

export function ehPalindromo(texto: string) {
    const invertido = texto.split("").reverse().join("");

    return texto === invertido;
}

export function ehPrimo(numero: number) {
    if (numero < 2) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

export function removerDuplicados(texto: string) {
    return [...new Set(texto)].join("");
}

export function ordemAlfabetica(texto: string) {
    return texto.split("").sort().join("");
}

export function contarPalavras(texto: string) {
    if (texto.trim() === "") return 0;

    return texto.trim().split(/\s+/).length;
}