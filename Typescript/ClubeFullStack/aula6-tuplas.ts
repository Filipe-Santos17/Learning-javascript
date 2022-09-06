let arrayDta: (string | number | boolean)[] = ['Filipe', 20, true]// Array<string> = string[]

arrayDta.push('Lucas',21,false)//Push apenas funciona se for depois do array ter recebido seu 1º valor
//push não precisa seguir a ordem da tupla, mas deve ser os mesmos tipos, e pode ser omitido

//Tupla =Array com tipos, quantidade e ordem pré-definidos

let tuplaData:[string, number] = ['Filipe', 20]//Se a ordem não for a mesma da tipagem da erro

let ArrayDeTuplas:[string, number][] = [
    ['Filipe', 20], //Todos os elementos devem ser a ordem exata
    ['Matheus', 22]
]