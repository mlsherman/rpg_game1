import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin", "ogre", "werewolf", "hobgoblin"]
let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

// Wizard section
function spell() {
    if(!isWaiting){
        hero.setDiceHtml()
        monster.setDiceHtml()
        hero.takeDamage5(monster.currentDiceScore)
        monster.takeDamage2(hero.currentDiceScore)
        hero.manaUsage(hero.currentDiceScore)
        render()
        if (hero.mana === 2) {
            spellBtn.disabled = true
        }
        if (hero.mana <= 6) {
          document.getElementById("info-section").innerHTML = "Out of mana!"  
        } 
        if(hero.dead){
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
            }
    }
} 

function attack() {
    if(!isWaiting){
        hero.setDiceHtml()
        monster.setDiceHtml()
        if (hero.health >= 30) {
          hero.takeDamage(monster.currentDiceScore)
          hero.manaUsage3(monster.currentDiceScore)  
        } else {
          hero.takeDamage5(monster.currentDiceScore)
          document.getElementById("info-section").innerHTML = "Mana Shield active! Damage reduced by 10"  
          hero.manaUsage(monster.currentDiceScore) 
        } if (hero.mana <= 40) {
            hero.manaGain(hero.currentDiceScore)
        }
        
        monster.takeDamage(hero.currentDiceScore)
        render()
        if(hero.dead){
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
        }    
    }
}

function endGame() {
    isWaiting = true
    const endMessage = hero.health === 0 && monster.health === 0 ?
        "Darkness envelopes the land..." :
        hero.health > 0 ? "The Hero Wins! All through the land peace has been restored." :
            "The monsters are Victorious. Darkness envelopes the land..."

    const endEmoji = hero.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Go again?</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}


// Knight section
function attack2() {
    if(!isWaiting){
        hero2.setDiceHtml()
        monster.setDiceHtml()
        hero2.rageGain(hero2.currentDiceScore)
        hero2.rageUsage(hero2.currentDiceScore)
        if (hero2.health >= 60) {
          hero2.takeDamage(monster.currentDiceScore)
        //   monster.takeDamage10(hero2.currentDiceScore)  
        } else {
          hero2.takeDamage3(monster.currentDiceScore)
        }
        if (hero2.health <= 60) {
  document.getElementById("info-section").innerHTML = 
  "Ardent Defender! Damage reduced by 6!"  
        }
        if (hero2.health >= 15) {
          monster.takeDamage(hero2.currentDiceScore)  
        } else {
          monster.takeDamage4(hero2.currentDiceScore)
          document.getElementById("info-section").innerHTML = "Heroic Strike! Damage increased by 10"  
        }
        
        
        render2()
        
        if(hero2.dead){
            endGame2()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render2()
                    isWaiting = false
                },1500)
            }
            else{
                endGame2()
            }
        }    
    }
}

function endGame2() {
    isWaiting = true
    const endMessage = hero2.health === 0 && monster.health === 0 ?
        "Darkness envelopes the land..." :
        hero2.health > 0 ? "The Hero Wins! All through the land peace has been restored." :
            "The monsters are Victorious. Darkness envelopes the land..."

    const endEmoji = hero2.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Go again?</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}

// Paladin section
function attack3() {
    if(!isWaiting){
        hero3.setDiceHtml()
        monster.setDiceHtml()
        if (hero3.health >= 35) {
          hero3.takeDamage(monster.currentDiceScore)
          hero3.manaUsage3(monster.currentDiceScore) 
          monster.takeDamage(hero3.currentDiceScore) 
        } else {
          hero3.manaGain(hero3.currentDiceScore)
          hero3.takeDamage9(monster.currentDiceScore)
          monster.takeDamage(hero3.currentDiceScore)
          document.getElementById("info-section").innerHTML = 
          "Mana well! Mana increases by attack roll"  
        }
        
        render3()
        
        if(hero3.dead){
            endGame3()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render3()
                    isWaiting = false
                },1500)
            }
            else{
                endGame3()
            }
        }    
    }
}

function heal() {
    if(!isWaiting){
        hero3.setDiceHtml()
        monster.setDiceHtml()
        hero3.takeDamage5(monster.currentDiceScore)
        hero3.manaUsage2(hero3.currentDiceScore)
        render3()
        if (hero3.mana <= 3) {
          document.getElementById("info-section").innerHTML = "Out of mana!"    
        } 
                
        if(hero3.dead){
            endGame3()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render3()
                    isWaiting = false
                },1500)
            }
            else{
                endGame3()
            }
            }
    }
}

function holyFire() {
    if(!isWaiting){
        hero3.setDiceHtml()
        monster.setDiceHtml()
        hero3.takeDamage5(monster.currentDiceScore)
        hero3.manaUsage4(hero3.currentDiceScore)
        monster.takeDamage8(hero3.currentDiceScore) 
        render3()
        if (hero3.mana <= 6) {
          document.getElementById("info-section").innerHTML = "Out of mana!"  
        }
        if(hero3.dead){
            endGame3()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render3()
                    isWaiting = false
                },1500)
            }
            else{
                endGame3()
            }
            }
    }
}

function endGame3() {
    isWaiting = true
    const endMessage = hero3.health === 0 && monster.health === 0 ?
        "Darkness envelopes the land..." :
        hero3.health > 0 ? "The Hero Wins! All through the land peace has been restored." :
            "The monsters are Victorious. Darkness envelopes the land..."

    const endEmoji = hero3.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Go again?</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}
// need to change these from html hardcoded to JS so they are not static in introduction
document.getElementById("attack-button").addEventListener('click', attack)
document.getElementById("attack-button2").addEventListener('click', attack2)
document.getElementById("attack-button3").addEventListener('click', attack3)
document.getElementById("spell-button2").addEventListener('click', heal)
document.getElementById("spell-button3").addEventListener('click', holyFire)
const spellBtn = document.getElementById("spell-button").addEventListener('click', function(){
    if (hero.mana >= 3){
        return spell()
    } 
})

//  const btn = document.createElement("BUTTON");
//  btn.innerHTML = "Spell";
//  btn.class = "btn-class";
//  document.body.appendChild(btn);

let hero = new Character(characterData.hero)
let hero2 = new Character(characterData.hero2)
let hero3 = new Character(characterData.hero3)
let monster = getNewMonster()

function render() {
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}
   
function render2() {
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml2()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}   

function render3() {
    document.getElementById('hero3').innerHTML = hero3.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}   


const wizardHero = document.getElementById('wizard').addEventListener('click', function(){  
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
    const audioObj = new Audio("/audio/songOfWolves.mp3");
        audioObj.play();    
    document.getElementById("wizard").remove()
    document.getElementById("knight").remove()
    document.getElementById("paladin").remove()
    document.getElementById("attack-button2").remove()
    document.getElementById("attack-button3").remove()
    document.getElementById("spell-button2").remove()
    document.getElementById("spell-button3").remove()
    document.getElementById("info-section").innerHTML = ''
})

const knightHero = document.getElementById('knight').addEventListener('click', function(){
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml2()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
    const audioObj = new Audio("/audio/songOfWolves.mp3");
        audioObj.play();
    document.getElementById("wizard").remove()
    document.getElementById("knight").remove()
    document.getElementById("paladin").remove()
    document.getElementById("spell-button").remove()
    document.getElementById("attack-button").remove()
    document.getElementById("attack-button3").remove()
    document.getElementById("spell-button2").remove()
    document.getElementById("spell-button3").remove()
    document.getElementById("info-section").innerHTML = ''
})

const paladinHero = document.getElementById('paladin').addEventListener('click', function(){
    document.getElementById('hero3').innerHTML = hero3.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
    const audioObj = new Audio("/audio/songOfWolves.mp3");
        audioObj.play();
    document.getElementById("wizard").remove()
    document.getElementById("knight").remove()
    document.getElementById("paladin").remove()
    document.getElementById("spell-button").remove()
    document.getElementById("attack-button").remove()
    document.getElementById("attack-button2").remove()
    document.getElementById("info-section").innerHTML = ''
})

function beginScreen(){
   document.getElementById("info-section").innerHTML = "Choose your hero:" 
   
} 
beginScreen()




