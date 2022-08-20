const exec = (fn,a,b) => fn(a,b)

const somarTerminal = (x,y) => {
    return x + y
}

console.log(exec(somarTerminal,5,5))