app.component('component-name', {
    props: {
      example: {
        type: Boolean,
        required: true
      }
    },
    template: 
    /*html*/
    `<div class="component-app">

    </div>`,
    data() {
      return {
          example: 'Socks',
      }
    },
    methods: {
        example() {
            this.$emit('abc', this.example)
        },
    },
    computed: {
        title() {
            return this.example + ' ' + this.example
        },
    }
  })