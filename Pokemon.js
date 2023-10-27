class Pokemon {

    constructor ( name , attack  , defense , hp , luck  ){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }isLucky (){
        let luckrandom = Math.random();
        if (this.luck > luckrandom ){
            return true;
        
        }else{
            return false ;
        }
    
    } attackPokemon(defenseadverse ) {
        let degat = this.attack - defenseadverse;
        if (degat < 0){
            degat=0
        }
        return degat;
    }
    
}

let Pokemon1 = new Pokemon ( "Salamèche " , 100 , 70  , 1000 , 0.7 );


let Pokemon2 = new Pokemon ( "Tasdemorve" , 100 , 70 , 1000, 0.7);

let degat1=0;
let degat2=0;

while (Pokemon1.hp > 0  && Pokemon2.hp > 0 ){
    //Le pokemon 1 attaque en premier 
    if ( Pokemon1.isLucky() === true ){
        degat1=Pokemon1.attackPokemon(Pokemon2.defense);
        Pokemon2.hp = Pokemon2.hp - degat1;
        if ( Pokemon2.hp <= 0 ){
            Pokemon2.hp = 0;
            console.log(Pokemon2.name + " a  subit " +  degat1 + " . Il lui reste " + Pokemon2.hp + " pv restant ") ;
            console.log(Pokemon2.name + " a perdu . "  + Pokemon1.name + " est le vainqueur !!!!! ");
            break; // le pokemon 2 a perdu , on stoppe la boucle sinon il attauqe alors qu'il n'a plus de pv 
        }else{
            console.log(Pokemon2.name + " a  subit " +  degat1 + " . Il lui reste " + Pokemon2.hp + " pv restants ") 
        }
        
    }else{
        console.log(Pokemon1.name + " a rater sa cible ")
    }
    // Le pokemon 2 attaque ensuite
    if ( Pokemon2.isLucky() === true ){
        degat2=Pokemon2.attackPokemon(Pokemon1.defense)
        Pokemon1.hp = Pokemon1.hp - degat2
        if ( Pokemon1.hp <= 0 ){
            Pokemon1.hp = 0
            console.log(Pokemon1.name + " a  subit " +  degat1 + " . Il lui reste " + Pokemon1.hp + " pv restant ") 
            console.log(Pokemon1.name + " a perdu . "  + Pokemon2.name + " est le vainqueur !!!!! ")
            break; 
        }else{
            console.log(Pokemon1.name + " a subit " + degat2 + " . Il lui reste " +  Pokemon1.hp + "  pv restants ") 
        }

    }else{
        console.log(Pokemon2.name + " a rater sa cible ")
    }   
}   






