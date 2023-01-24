import { getDiceRollArray, getDicePlaceholderHtml, getPercentage, getPercentage2, getPercentage3 } from './utils.js'

function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health
    
    this.maxRage = this.rage
    
    this.maxMana = this.mana
    
    this.spell = this.spell
    
    this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    
    this.setDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }

    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }  
    }
    // wizard spell damage
     this.takeDamage2 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore + 18
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
      this.takeDamage3 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore - 6
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
     this.takeDamage4 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore + 10
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
    //  hero damage taken during spell cast
     this.takeDamage5 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore - 6
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
     this.takeDamage6 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore - 12
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
     this.takeDamage7 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore + 12
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
    //  palain HolyFire damage
     this.takeDamage8 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore + 26
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
    //  Paladin Bulwark of Light
     this.takeDamage9 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore - 4
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        } 
        
     }
     
     this.takeDamage10 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore + Math.floor(Math.random() * 6) + 6
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        } 
        
     }
     
    // wizard spell mana usage
  this.manaUsage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.mana -= totalAttackScore + 2
        if (this.mana <= 0) {
            this.manaOut = true
            this.mana = 0
        }
        
     }
    //  Paladin mana usage for heal
     this.manaUsage2 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.mana -= 14
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        } else {
            this.health += 24
        }
        // this.health += 24
        if (this.mana <= 0) {
            this.manaOut = true
            this.mana = 0
        }
        
     }
    // paladin/wizard attack mana usage 
     this.manaUsage3 = function () {
        this.mana -= 2
        if (this.mana <= 0) {
            this.manaOut = true
            this.mana = 0
        }
        
     }
    //  paladin holyFire spell 
     this.manaUsage4 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.mana -= Math.floor(Math.random() * 8) + 4 
        if (this.mana <= 0) {
            this.manaOut = true
            this.mana = 0
        }
        
     }
     
      this.manaGain = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.mana -= totalAttackScore - 18
        if (this.mana <= 0) {
            this.manaOut = true
            this.mana = 0
        }
        
     }
     
     this.rageUsage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.rage -= totalAttackScore + 6
        if (this.rage <= 0) {
            this.rageOut = true
            this.rage = 0
        }
        
     }
     
     this.rageGain = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.rage += 10
        if (this.rage <= 0) {
            this.rageOut = true
            this.rage = 0
        }
        
     }
     
    
    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`  
    }
    
    this.getManaBarHtml = function () {
        const percents = getPercentage2(this.mana, this.maxMana)
        return `<div class="mana-bar-outer">
                    <div class="mana-bar-inner ${percents < 26 ? "danger" : ""}" 
                            style="width:${percents}%;">
                    </div>
                </div>`  
    }
    
    this.getRageBarHtml = function () {
        const percentage = getPercentage3(this.rage, this.maxRage)
        return `<div class="rage-bar-outer">
                    <div class="rage-bar-inner ${percentage < 26 ? "danger" : ""}" 
                            style="width:${percentage}%;">
                    </div>
                </div>`  
    }
    
    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceHtml, mana, spell } = this
        const healthBar = this.getHealthBarHtml()
        const manaBar = this.getManaBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="health">mana: <b> ${mana} </b></div>
                ${manaBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>
            `
    }
    this.getCharacterHtml2 = function () {
        const { elementId, name, avatar, health, diceCount, diceHtml, rage } = this
        const healthBar = this.getHealthBarHtml()
        const rageBar = this.getRageBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="health">rage: <b> ${rage} </b></div>
                ${rageBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
    
    }
}


export default Character