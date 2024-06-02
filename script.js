let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let inventory = ["stick"];


//Javascript prica sa HTML koristeci Document Object Model. (document).
//Kako bi pronasli specifican element u HTML koristimo querSelector(). Dodajemo # u QuerySelector

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

//ako ne zelimo da neku varijablu vise menjamo onda koristimo CONST

//stigli smo do zadatka 25



const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");


//ovako se pravi funkcija. Napisemo funkciju i njen naziv sa zagradama, i onda otvorimo viticaste zagrade
function goStore() {
    console.log("Going to store."); //sada smo joj dali funkciju da u konzoli napise Idem u prodavnicu.
    
}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon () {
    console.log("Fighting dragon.");
}



// initialize buttons

//Dugmad imaju opciju onclick sto znaci sta ce se dogoditi kada se klikne na njih.

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;