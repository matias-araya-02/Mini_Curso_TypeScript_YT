"use strict";
/*
//BOOLEANOS

let estudiaste_javaScript : boolean = false

if (estudiaste_javaScript) {
    console.log("Puedes seguir viendo este curso de TypeScript");
}else{
    console.log("Primero tenes que ver el video de JavaScript")
} */
/*
//ENTEROS

let interMiami: number | null | undefined = 11
let fcDalas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

let palabras: string = `Me emocioné al verlo a Messi`

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void{
    
    let motivo: string = ``
    if(juegaMessi){
        equipo1 += messi
        motivo = `porque juega Messi`
    }
    if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`)
    if (equipo1 == equipo2) console.log("Empatan")
    if (equipo1 < equipo2) console.log("Gana FC Dalas")
}

jugar(interMiami, fcDalas, juegaMessi)
*/
/*
//ANY
//saltea las validaciones de tipado
// cambiar any por el tipado correspondiente
let disney:any;

disney = `Star Wars y Marvel`;
console.log(disney)

disney = 150000000;
console.log(disney)

disney = true;
console.log(disney)
*/
/*
//ARREGLOS
let arregloNumeros: number[] = [1,2,3,4,5,6]

let arregloTexto: string[] = ['HTML', 'CSS', 'JS']

arregloTexto[0].indexOf('HTML')
*/
/*
//OBJETOS LITERALES
let programador = {
    nombre: 'Matías Araya',
    tecnologias: ['React', 'css', 'html'],
    tomaMate: true
}

programador = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C#'] ,
    tomaMate:false
}

console.log(programador)
*/
/*
//TYPE PERSONALIZADOS

type Programador = {
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null
}

let programador : Programador = {
    nombre: 'Matías Araya',
    tecnologias: ['React', 'css', 'html'],
    tomaMate: true
}

let programador2: Programador = {
    nombre: 'Federico',
    tecnologias: ['java', 'python'],
    tomaMate: null
}
    
*/
/*
//INTERFACES

interface Programador{
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null
}

let programador : Programador = {
    nombre: 'Matías Araya',
    tecnologias: ['React', 'css', 'html'],
    tomaMate: true
}

let programador2 = {
    nombre: 'Federico',
    tecnologias: ['java', 'python'],
    tomaMate: null,
    apellido: 'Buenardo',
    recibido: false

}


function enviarCurriculum( programador : Programador){
    console.log(`Este Curriculum es de ${programador.nombre}`)
}

enviarCurriculum(programador)
*/
/*
//Clases y POO

class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`)
    }
}

const pelicula = new Pelicula('Until Dawn', ['Sam', 'Mike'], ['Elizabeth Anachei', 'Matias Araya'] )

console.log(pelicula)
pelicula.proyectarEnCine()
*/
/*
//ENCAPSULAMIENTO Y GENERICOS

class Sorteo <T>{

    private ticket?: T;
    
    constructor(private nombre: string){}

    setTicket(ticket:T){
        this.ticket = ticket
    }

    getTicket(){
        return this.ticket
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

let sorteo = new Sorteo<number>('Matías Araya')
sorteo.setTicket(7)
console.log(sorteo.sortear())
*/ 
