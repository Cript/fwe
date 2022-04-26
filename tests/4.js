import {expect} from "chai";
import {parseQuery, parseQuery2} from "../4.js"

describe('rmSource', () => {
    const cases = [
        {url: 'https://www.baidu.com?name=app&type=1&work=web', result: { name: 'app', type: 1, work: 'web' } },
        {url: 'https://www.baidu.com', result: {} },
        // Not implemented
        // {url: 'https://www.baidu.com?type=1&type=2', result: { type: [1, 2] } }
    ]

    describe(`parseQuery`, () => {
        cases.forEach(({url, result}) => {
            describe(`When called with ${url}`, () => {
                it(`should return ${result}`, () => {
                    expect(parseQuery(url)).eqls(result)
                })
            })
        })
    })

    describe(`parseQuery2`, () => {
        cases.forEach(({url, result}) => {
            describe(`When called with ${url}`, () => {
                it(`should return ${result}`, () => {
                    expect(parseQuery2(url)).eqls(result)
                })
            })
        })
    })
})
