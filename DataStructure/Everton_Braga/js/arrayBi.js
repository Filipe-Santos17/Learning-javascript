//Array Bidimensional
var Line = []

var Linha1 = [1,2,3,4,5]
var Linha2 = [6,7,8,9,0]

Line[0] = Linha1
Line[1] = Linha2

console.log(Line) //Array com Array
//[ [array1], [array2] ]

console.log(Line[0][1])//2


//Array Multidimensional
var lineOne = [0,1,2,3,4,5,6,7,8,9]
var lineTwo = [0,1,2,3,4,5,6,7,8,9]
var lineThree = [0,1,2,3,4,5,6,7,8,9]
var lineFour = [0,1,2,3,4,5,6,7,8,9]

var FirstTwoLines = [lineOne,lineTwo]
var LastTwoLines = [lineThree,lineFour]

var matriz = [FirstTwoLines,LastTwoLines]

console.log(matriz)

//destrinchando
for(var x = 0 ; x < matriz.length ; x++){
    for(var y = 0 ; y < matriz[x].length ; y++){
        for(var z = 0 ; z < matriz[x][y].length ; z++){
            console.log(matriz[x][y][z])
        }
    }
}