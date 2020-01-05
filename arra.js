aprovados=['daniel','sabrina','samuel']

console.log(aprovados[2])
aprovados[3]='gustavo'
aprovados.push('ruthe')
console.log(aprovados[4])

aprovados[9]='israel'
console.log(aprovados[9])
console.log(aprovados[8]===undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)
delete aprovados[1]
aprovados=['gabigol','arrascaeta','diegoalves']

aprovados.splice(1,2,'elemento1')
console.log(aprovados)
