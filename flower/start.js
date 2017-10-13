const flower = new Vue({
  el: '#app',
  data: {
    showPetal: false,
    showDrops: true,
    showDropsClass: ''
  },
  methods: {
    toggleShowPetal: function() {
      this.showPetal = true
      // this.showDropsClass = 'growingDrops'
    }
  },
  created() {
    setTimeout(() => {
      this.toggleShowPetal()
    }, 2000)
  }
})


