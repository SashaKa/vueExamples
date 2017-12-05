new Vue({
  el: '#app',

  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameRaning: false,
    turns: []
  },
  methods: {

    startGame() {
      this.gameRaning = true
      this.playerHealth = 100
      this.monsterHealth = 100
      this.turns =[]
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    attack() {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer:true,
        text:'Player hits Monsrter for ' + damage
      }) 

      if (this.checkWin()) {
        return
      }
      this.monsterAttack()
    },
    specialAttack() {
      let damage = this.calculateDamage(10,30)
      this.monsterHealth -=damage

      if (this.checkWin()) {
        return
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monsrter hard for ' + damage
      }) 

      this.monsterAttack()
    },
    monsterAttack() {
      let damage =this.calculateDamage(3, 10)
      this.playerHealth -= damage
      this.checkWin()
      this.turns.unshift({
        isPlayer:false,
        text:'  Monsrter hits Player for ' + damage
      }) 
    },
    heal() {
      if(this.playerHealth <=90){
        this.playerHealth += 10
      }
      else { 
        this.playerHealth=100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10' 
      }) 
      this.monsterAttack()
    },
    giveUp() {
      this.gameRaning=false
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('You win! New  game?')) {
          this.startGame()
        } else {
          this.gameRaning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New  game?')) {
          this.startGame()
        } else {
          this.gameRaning = false
        }
        return true
      }
      return false
    }
  }
})
