//correct answer: b, d, e

var arr = []
var notArr = true

console.log('typeof arr', typeof arr === 'array')
console.log('typeof notArr', typeof notArr === 'array')

console.log('')

console.log('instanceof arr', arr instanceof Array)
console.log('instanceof notArr', notArr instanceof Array)

console.log('')

console.log('length arr', arr.length > 0)
console.log('length notArr', notArr.length > 0)

console.log('')

console.log('Object.prototype.toString.call(arr)', Object.prototype.toString.call(arr) === '[object Array]')
console.log('Object.prototype.toString.call(notArr)', Object.prototype.toString.call(notArr) === '[object Array]')

console.log('')

console.log('Array.isArray(arr) ', Array.isArray(arr))
console.log('Array.isArray(notArr) ', Array.isArray(notArr))