import test from "node:test";
import assert from "node:assert";

import { media } from "./index.js";

test("Média de 1 e 2 deve ser 1.5", () => assert.deepStrictEqual(media(1, 2), 1.5));

test("Media de 1.25 e 3.25 deve ser 2.25", () => assert.deepStrictEqual(media(1.25, 3.25), 2.25));

test("Media entre numeros e infinito", () => assert.deepStrictEqual(media(1, Infinity), Infinity));

test("Media entre -69 e 67 deve ser -1", () => assert.deepStrictEqual(media(-69, 67), -1));