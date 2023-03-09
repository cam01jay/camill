const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss' },
                {title: 'the way of the kings', author: 'brandon sanderson' },
                {title: 'the final empire', author: 'brandon sanderson' },
            ]
        }
    },
    methods: {
       toggleShowBooks() {
        this.showBooks = !this.showBooks
       },
      
    }
})

app.mount('#app')