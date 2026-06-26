import test from "node:test";
import assert from "node:assert";

import { maior } from "./index.js";

test("Entre dois números inteiros, deve-se retornar o menor", () => {
    assert.deepStrictEqual(maior(1, 2), 1);
    assert.deepStrictEqual(maior(4,1), 1);
    assert.deepStrictEqual(maior(6, 7), 6);
    assert.deepStrictEqual(maior(39, 72), 39);
});

test("entre dois numeros inteiros positvos ou negativos, deve-se retornar o menor", () => {
    assert.deepStrictEqual(maior(2, -4), -4);
    assert.deepStrictEqual(maior(-1, -2), -2);
    assert.deepStrictEqual(maior(0, -2), -2);
});

test("entre números decimais, deve-se retornar o menor", () => {
    assert.deepStrictEqual(maior(1.2, 1), 1);
    assert.deepStrictEqual(maior(7.3, 7.4), 7.3);
    assert.deepStrictEqual(maior(-9.8, -9.9), -9.9);
});

test("entre números iguais, deve-se retornar uma mensagem"), () => {
    assert.deepStrictEqual(maior(7, 7), "Números iguais");
}