let namesArray = ['Filipe','Sidneia'] //Espera que nesse array receba apenas strings
//Fica implicito que esse array será ' string[] ', pois apenas tem strings

let namesArray2: (string | number)[] = ['Filipe',21] //Fica explicito que array irá aceitar Number e String

let person2: object//Desse jeito dá um probleminha, pois ele aceita qualquer tipo de obj, como array [] entre outros
//ex:
person2 = []

let person3: { //Dessa forma é o jeito certo de definir um objeto
    name: string, //Escolha os parametros que espera receber e os seus tipos
    age: number
}

person3 = {
    name: 'Filipe',
    age: 28//Se colocar apenas um param da erro, pois ele espera que venha os dois
}