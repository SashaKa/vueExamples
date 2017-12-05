Vue.component('individual-comment', {
  template: '#comment-template',
  props: ['commentpost']
});

new Vue({
  el: '#app',
  data: {
    newComment: '',
    comments: [
      {
        text: 'Looks great Julianne!',
        author: 'Robin',
        authorImg:
          'https://dog.ceo/api/img/terrier-toy/n02087046_4401.jpg'
      },
      {
        text: 'I love your paws',
        author: 'Miriam',
        authorImg:
          'https://dog.ceo/api/img/terrier-irish/n02093991_4356.jpg'
      },
      {
        text: 'Where are you?',
        author: 'Geoff ',
        authorImg:
          'https://dog.ceo/api/img/retriever-flatcoated/n02099267_482.jpg'
      }
    ]
  },
  methods: {
    addComment: function() {
      const newCommentObj = {
        text: this.newComment,
        author: 'Magoo',
        authorImg:
          'https://dog.ceo/api/img/hound-Ibizan/n02091244_4861.jpg'
      }
      this.comments.push(newCommentObj)
      this.newComment = ''
    }
  }
})