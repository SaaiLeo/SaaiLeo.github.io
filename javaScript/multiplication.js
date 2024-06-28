L = [1,2,3,4,5,6,7,8,9,10]
 
let result = 1
for(let i=0; i<L.length; i++) {
    result *= L[i]
}
 
console.log('Loop',result)
 
// Normal function
function mult(acc,cur) {
    return acc * cur
}
 
result = L.reduce(mult)
 
console.log('Reducer',result)
 
// Arrow (annoymous) function
result = L.reduce((acc,cur) => acc * cur)
console.log("Arrow",result)