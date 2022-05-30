
//function cicloMenstrual(dia) {
    //if (dia >= 1 && dia <= 5){

   // }
	

//}

//function solucao(presenca, entregouTodosOsTrabalhos, notaSoftSkills, notaProgramacao) {
	//if( presenca >= 75 && entregouTodosOsTrabalhos){
        //console.log("APROVADA");

    //}
    
    //}
    //if( notaSoftSkills >=90 && notaProgramacao >=90){
       // console.log("APROVADA - MERITO EM SOFT SKILLS");

    //}
    //else {
        //console.log("REPROVADA")
  
//}
//Caso um time tenha convocado mais de 18 jogadores, imprima na tela a mensagem: INVALIDA POR TER MAIS DE 18 JOGADORES

//Caso um time tenha uma quantidade adequada de jogadores no total, mas tenha convocado mais de 3 jogadores com mais de 23 anos, você deve imprimir na tela apenas o número de jogadores com mais de 23 anos

//Caso a convocação seja válida, imprima na tela apenas a mensagem: CONVOCACAO VALIDA

/*function solucao(idadesDosatletas ) {

    const idades = [20,24,21,20,20,17,21,20,22,21,17,17,20,24,17,22,23,24]

    if(idadesDosatletas.length > 18){

        console.log("INVALIDA POR TER MAIS DE 18 JOGADORES")
    }
let atletasComMaisDe23 =0;
for( let i =0; i<= idadesDosatletas.length; i++) {
    if(idadesDosatletas[i] > 23)
}

}
*/


let carros = ['Gol','Onix','Sandero','Polo'] 
                        
///// push

console.log(carros)
novocarro = carros.push('Audi')
console.log("O método Push adiciona um novo valor ao array, no seu final. Ex:", carros)

////// pop

console.log(carros)
ultimoCarro = carros.pop()
console.log("O método Pop remove e retorna o último índice do array. Ex:",ultimoCarro);


/////////////// join

console.log(carros)
let traco = carros.join("/")
console.log("O método Join junta índices de um array, podendo colocar um caractere entre cada índice. Ex:",
traco)
//////////////// shift

let primeirocarro = carros.shift()
console.log(carros)
console.log("O método Shift remove e retorna o primeiro elemento do array. Ex: ",primeirocarro)
/////////////// unshift

carros.unshift('Fusca')
carros.unshift('Bmw')
console.log("O método unShift adiciona um ou mais elementos no inicio do array. Ex: ",carros)








