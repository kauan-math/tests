import test from "node:test"
import { soma } from "./index.js"
import assert from "node:assert/strict"

test("Deve somar dois números e retornar a soma",
    () => {
        assert.strictEqual(soma(1, 1), 2)
    }
)

test("deve retornar erro se o usuario passar parametros que não são numeros",
    // @ts-ignore
    () => { assert.strictEqual(soma("string", true), "Me envie Números!")}
    )

test("Deve retornar erro se não tiver parametros",
    () => {
        // @ts-ignore 
        assert.strictEqual(soma(), "Me envie Números!")
    }
    )

