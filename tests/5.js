import {expect} from "chai";
import {rmSource} from "../5.js"

describe('rmSource', () => {
    const cases = [
        {source: [2, 4, 3, 1, 'a', 6], rmKey: [2, 4], result: [2, 4, 1, 6]},
        {source: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rmKey: [1, 3, 5, 7, 9], result: [1, 3, 5, 7, 9]},
        {source: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rmKey: [0, 2, 4, 6, 8], result: [2, 4, 6, 8, 10]},
    ]

    describe(`rmSource`, () => {
        cases.forEach(({source, rmKey, result}) => {
            describe(`When called with ${source} and ${rmKey}`, () => {
                const testSource = [...source]
                it(`should return ${result}`, () => {
                    rmSource(testSource, rmKey)
                    expect(testSource).eqls(result)
                })
            })
        })
    })
})
