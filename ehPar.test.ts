import test from "node:test";
import assert from "node:assert";

import { ehPar } from "./index.js";
import { gerarPar, gerarImpar } from "./helpers.js";


test("Se o numero passado for par, deve retornar true", () => assert.deepStrictEqual(ehPar(gerarPar()), true));

test("Se o numero passado for impar, deve retornar false", () => assert.deepStrictEqual(ehPar(gerarImpar()), false));

test("Se passarmos infinito deve retornar uma mensagem de erro", () => assert.deepStrictEqual(ehPar(Infinity), "Me envie um número finito"));