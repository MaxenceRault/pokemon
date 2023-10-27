class Personnage {

    constructor (name , santéMentale) {
        this.name=name
        this.santéMentale = santéMentale

    }dégat ( Radio , M ,CT ){
        
        if (Radio[M] === " Annissa-Wejdene "  ){
            this.santéMentale = this.santéMentale - 1 
            CT = CT+1
        }
    }
      
}

let laRadio = [ " Annissa-Wejdene " , " Come As You Are-Nirvana " , " What I've Done-LinkinPart" , "Paint It Black-RollingStone", " Let It Be- Beatles"];

let Perso = new Personnage("Gérard" , 10)
let changementTaxi = 0
let feuxRougeParcouru = 1
let musique= 0
while(feuxRougeParcouru < 31 && Perso.santéMentale > 0 ){
    musique=  Math.floor(Math.random() * laRadio.length)
    
    Perso.dégat(laRadio , musique , changementTaxi )
   
    console.log("La musique joué est " + laRadio[musique] + ".  Il a parcouru " + feuxRougeParcouru + " feux rouges ."  )
    console.log(Perso.santéMentale)
    feuxRougeParcouru = feuxRougeParcouru + 1 
}

if (feuxRougeParcouru === 31){
    console.log (Perso.name + " est bien arrivé en faisant " + changementTaxi + " Changement de taxi " )

}else{
    console.log("EXPLOSION")
}

