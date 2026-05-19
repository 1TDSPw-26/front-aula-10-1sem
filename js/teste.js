const validar = (a,b) => {
    return a+b
}

console.log(validar(2,2))

let frase = "estou com muito sono!"
console.log(frase[6])
console.log(frase.length)

for(let x = 0; x < frase.length; x++) {
    if (frase[x].toLowerCase() === "o")
        console.log(x, frase[x])
}