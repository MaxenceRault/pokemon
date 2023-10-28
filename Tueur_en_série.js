class Tueur {

    constructor(name , hp ){
        this.name=name
        this.hp=hp
    
    }degatsubit(x){
        
        this.hp= this.hp-x
    }attaque(survivantmax,survivantmid,survivantmin,survivantname){
        let random=Math.random()
        if (random < survivantmin ){
            return 1
        }else if ( random < survivantmid ){
            return 2
        
        }else {
            return 3
        }
    }
}

let nomClichésport = ["Lucas" , "Michael", "David" , "Alex" , "Damien"]
let nomClichénerd = ["Pénélope","Sheldon","Harold", "Howard","Margaret"]
let nomClichéblonde = ["Sabrina","Lucie", "Claire","Carinne","Julie"]
let nomCLichéRiche = ["Harrisson", "Alexander","Margaret","Henry","Olivia"]
let nomClichéDetective = ["Sam","Sherlock","Hercule Poirot","Veronica","Nick"]

let nomSport= nomClichésport[Math.floor(Math.random() * nomClichésport.length)]
let nomBlonde = nomClichéblonde[Math.floor(Math.random() * nomClichéblonde.length)]
let nomDetective = nomClichéDetective[Math.floor(Math.random() * nomClichéDetective.length)]
let nomNerd = nomClichénerd[Math.floor(Math.random() * nomClichénerd.length)]
let nomRiche = nomCLichéRiche[Math.floor(Math.random() * nomCLichéRiche.length)]

const PersoSport = {
    name : nomSport , 
    proba1 : 0.3,
    proba2 : 0.6,
    proba3 : 0.2,
    Statue : "Alive"
}

const PersoDetective = {
    name : nomDetective , 
    proba1 : 0.2,
    proba2 : 0.6,
    proba3 : 0.4,
    Statue : "Alive"
}

const PersoBlonde = {
    name : nomBlonde , 
    proba1 : 0.6,
    proba2 : 0.2,
    proba3 : 0.4,
    Statue : "Alive"
}

const PersoNerd = {
    name : nomNerd, 
    proba1 : 0.5,
    proba2 : 0.4,
    proba3 : 0.6,
    Statue : "Alive"
}

const PersoRiche = {
    name : nomRiche , 
    proba1 : 0.3,
    proba2 : 0.1,
    proba3 : 0.5,
    Statue : "Alive"
}

function randomEvent(PersoProba1,PersoProba2,PersoProba3){

    let tab = [PersoProba1,PersoProba2,PersoProba3]//on créé un tableu avec les 3 Arguments 
    let r = Math.random()
    let s = 0
    for (let i = 0; i < tab.length; i++) {
        s += tab[i];
        if (r < s) {
            return tab[i];     
        }
    }
}
let tableauMort=[]
let Jason = new Tueur ( "Jason" , 100 )
let attaque=0
while (Jason.hp > 0 && PersoSport.Statue==="Alive" || PersoBlonde.Statue==="Alive" || PersoDetective.Statue==="Alive" || PersoNerd.Statue==="Alive" 
|| PersoRiche.Statue==="Alive" ){
    if(PersoSport.Statue==="Alive"){
        let attaque = randomEvent(PersoSport.proba1,PersoSport.proba2,PersoSport.proba3)
        if (attaque === PersoSport.proba1) {
            console.log(Jason.name + " a tué " + PersoSport.name)
            PersoSport.Statue = "Dead"
            tableauMort.push(PersoSport.name)
        }else if ( attaque === PersoSport.proba2){
            console.log(PersoSport.name + " a esquivé et a infligé 10 de dégats .")
            Jason.degatsubit(10)
        }else {
            console.log(Jason.name + " a tué " + PersoSport.name + " mais a subit 15 de dégats . ")
            PersoSport.Statue = "Dead"
            Jason.degatsubit(15)
            tableauMort.push(PersoSport.name)
        }
    }
    if(PersoBlonde.Statue==="Alive"){
        let attaque = randomEvent(PersoBlonde.proba1,PersoBlonde.proba2,PersoBlonde.proba3)
        if (attaque === PersoBlonde.proba1) {
            console.log(Jason.name + " a tué " + PersoBlonde.name)
            PersoBlonde.Statue = "Dead"
            tableauMort.push(PersoBlonde.name)
        }else if ( attaque === PersoBlonde.proba2){
            console.log(PersoBlonde.name + " a esquivé et a infligé 10 de dégats .")
            Jason.degatsubit(10)
        }else {
            console.log(Jason.name + " a tué " + PersoBlonde.name + " mais a subit 15 de dégats . ")
            PersoBlonde.Statue = "Dead"
            Jason.degatsubit(15)
            tableauMort.push(PersoBlonde.name)
        }
    }
    if(PersoDetective.Statue==="Alive"){
        let attaque = randomEvent(PersoDetective.proba1,PersoDetective.proba2,PersoDetective.proba3)
        if (attaque === PersoDetective.proba1) {
            console.log(Jason.name + " a tué " + PersoDetective.name)
            PersoDetective.Statue = "Dead"
            tableauMort.push(PersoDetective.name)
        }else if ( attaque === PersoDetective.proba2){
            console.log(PersoDetective.name + " a esquivé et a infligé 10 de dégats .")
            Jason.degatsubit(10)
        }else {
            console.log(Jason.name + " a tué " + PersoDetective.name + " mais a subit 15 de dégats . ")
            PersoDetective.Statue = "Dead"
            Jason.degatsubit(15)
            tableauMort.push(PersoDetective.name)
        }
    }
    if(PersoNerd.Statue==="Alive"){
        let attaque = randomEvent(PersoNerd.proba1,PersoNerd.proba2,PersoNerd.proba3)
        if (attaque === PersoNerd.proba1) {
            console.log(Jason.name + " a tué " + PersoNerd.name)
            PersoNerd.Statue = "Dead"
            tableauMort.push(PersoNerd.name)
        }else if ( attaque === PersoNerd.proba2){
            console.log(PersoNerd.name + " a esquivé et a infligé 10 de dégats .")
            Jason.degatsubit(10)
        }else {
            console.log(Jason.name + " a tué " + PersoNerd.name + " mais a subit 15 de dégats . ")
            PersoNerd.Statue = "Dead"
            Jason.degatsubit(15)
            tableauMort.push(PersoNerd.name)
        }
    }
    if(PersoRiche.Statue==="Alive"){
        let attaque = randomEvent(PersoRiche.proba1,PersoRiche.proba2,PersoRiche.proba3)
        if (attaque === PersoRiche.proba1) {
            console.log(Jason.name + " a tué " + PersoRiche.name)
            PersoRiche.Statue = "Dead"
            tableauMort.push(PersoRiche.name)
        }else if ( attaque === PersoRiche.proba1){
            console.log(PersoRiche.name + " a esquivé et a infligé 10 de dégats .")
            Jason.degatsubit(10)
        }else {
            console.log(Jason.name + " a tué " + PersoRiche.name + " mais a subit 15 de dégats . ")
            PersoRiche.Statue = "Dead"
            Jason.degatsubit(15)
            tableauMort.push(PersoRiche.name)
        }
    }
}


if (Jason.hp > 0) {
    console.log(Jason.name + " a tué tout le monde !!")
}else{

    console.log( Jason.name + " est mort . Les survivant ont gagné mais R.I.P à " + tableauMort )
}

