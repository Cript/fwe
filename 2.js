//correct answer: c (5,5,5,5,5; 0,1,2,3,4)

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i))
}
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i))
}