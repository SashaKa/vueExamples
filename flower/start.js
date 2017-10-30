const flower = new Vue({
  el: '#app',
  data: {
    showPetal: false,
    showDrops: false,
    showDropsClass: ''
  },
  methods: {
    toggleShowPetal() {
      this.showPetal = true

      setTimeout(() => {
        this.toggleShowDrops()
      }, 2500)
    },

    toggleShowDrops() {
      this.showDrops = true
      this.showDropsClass = 'growingDrops'
    }
  },
  created() {
    setTimeout(() => {
      this.toggleShowPetal()
    }, 1000)
  }
})
