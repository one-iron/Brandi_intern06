import store from '../../vuex/store'

export default {
  store: store,
  computed: {
    constants() {
      return this.$store.state.const
    },
  },
  methods: {

  }
}
