<template>
  <div>
    <table class="bordered">
      <thead>
      <tr>
        <th>날짜</th>
        <th>주문상태</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in dataStore.detailData.order_histories">
        <td>{{ item.update_time }}</td>
        <td>{{ getOrderStatusTypeName(item.order_status_id) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    dataStore: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    constants() {
      return this.$store.state.const
    },
  },
  methods: {
    getOrderStatusTypeName(order_status) {
      let statusItem = this.constants.orderStatusTypes.filter((d)=>{return d.value == order_status})
      if (statusItem.length > 0) return statusItem[0].label
      return ''
    }
  }
}
</script>
<style scoped>
.bordered {
  width: 100%;
}
</style>
