18 lines (17 sloc)  334 Bytes

const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am the template</h2>'
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'brandon Sanderson',
      age: 45
    }
  },
  methods: {
    toggleShowBooks = !this.showBooks
    }
  }
})

app.mount('#app')
