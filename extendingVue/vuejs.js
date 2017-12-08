const data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

const vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true
      this.updateTitle('The VueJS Instance (Updated)')
      this.$refs.myButton.innerText = 'Test'
     
    },
    updateTitle: function(title) {
      this.title = title
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase()
    }
  },
  watch: {
    title: function(value) {
      console.log('Title changed, new value: ' + value)
    }
  }
})


vm1.$refs.heading.innerText = 'Something else'

setTimeout(function() {
  vm1.title = 'Changed by Timer'
  vm1.show()
}, 3000)

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!'
    }
  }
})

const vm3 = new Vue({
  template: '<h1>Hello!</h1>'
})

vm3.$mount('#app3')