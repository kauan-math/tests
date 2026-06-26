import test from "node:test"
import assert from "node:assert"
import { aprovado } from "./index.js";
import { gerarNegativo } from "./helpers.js";

test("Deve retornar se o aluno está aprovado ou reprovado dependendo da nota", () => {
    assert.deepStrictEqual(aprovado(0), "reprovado");
    assert.deepStrictEqual(aprovado(1), "reprovado");
    assert.deepStrictEqual(aprovado(2), "reprovado");   
    assert.deepStrictEqual(aprovado(3), "reprovado");
    assert.deepStrictEqual(aprovado(4), "reprovado");
    assert.deepStrictEqual(aprovado(5), "reprovado");
    assert.deepStrictEqual(aprovado(6), "reprovado");
    assert.deepStrictEqual(aprovado(7), "aprovado");
    assert.deepStrictEqual(aprovado(8), "aprovado");
    assert.deepStrictEqual(aprovado(9), "aprovado");
    assert.deepStrictEqual(aprovado(10), "aprovado");
})

test("Deve retornar uma mensagem de erro se passarmos um número negativo", () => {
    assert.deepStrictEqual(aprovado(gerarNegativo()), "Me dê uma nota positiva");
})

test("deve retornar uma mensagem de erro se passarmos um número maior que 10", () => {
    assert.deepStrictEqual(aprovado(11), "Me dê uma nota menor ou igual a 10");
})