import { test } from 'node:test'
import assert from 'node:assert'

import { fibonacci } from "./index.js";

test("Deve retornar o primeiro número de sequência de Fibonacci se passamos 1 ",
   () => {
    assert.deepEqual(fibonacci(1), [1])
   } 
)

test("Deve retornar os primeiros 2 primeiros números de sequência de Fibonacci se passamos 2",
   () => {
    assert.deepEqual(fibonacci(2), [1, 1])
   } 
)

test("Deve retornar os primeiros 5 primeiros números de sequência de Fibonacci se passamos 5",
   () => {
    assert.deepEqual(fibonacci(5), [1, 1, 2, 3, 5])
   } 
)

test("Deve retornar uma lista vazia se passarmos 0",
   () => {
    assert.deepEqual(fibonacci(0), [])
   } 
)

test("Deve retornar uma mensagem de erro se passarmos um número negativo",
   () => {
    assert.deepEqual(fibonacci(-1), "Me envie um número positivo!")
   } 
)

test("Deve retornar uma mensagem de erro se passarmos um número não inteiro",
   () => {
    assert.deepEqual(fibonacci(1.5), "Me envie um número inteiro!")
   } 
)

test("Deve retornar uma mensagem de erro se passarmos um número maior que 50", () => {
    assert.deepEqual(fibonacci(51), "me de um número menor ou igual a 50!")
})