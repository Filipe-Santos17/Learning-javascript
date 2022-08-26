//import { SomaF } from "./soma"; type="module";
var SomaF = require("./soma")
var SubtF = require("./subt")
var MultF = require("./mult")
var DiviF = require("./divi")

var a = prompt("Digite um numero: ");
var x = prompt("Digite a operação[so,su,mu,di]: ");
var b = prompt("Digite outro numero: ")

function Calc(a,x,b){
    if(x = su){
        console.log(SomaF(a,b));
    } else if ( x = so){
        console.log(SubtF(a,b));
    } else if (x = mu){
        console.log(MultF(a,b));
    } else if (x = di){
        console.log(DiviF(a,b));
    } else {
        console.log("Valores ou Operação inserida erroneamente");
    }
}