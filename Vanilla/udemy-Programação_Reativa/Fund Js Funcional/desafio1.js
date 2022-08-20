function range(a,b, c=1 ){

    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c)

    const nums = []

    for(let x = n1 ; n1 <= n2 ? x <= n2 : x >= n2 ; x+= step){
        nums.push(x)
    }

    return nums
}

console.log(range(5))
console.log(range(5,9))
console.log(range(9,2))
console.log(range(8,-3,2))