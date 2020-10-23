<template>
<div>
  <a-button :type="allChecked ? 'primary':'normal'" @click="checkAll">전체</a-button>
  <a-button class="sub-button" :type="value.includes(item.value) ? 'primary':'normal'" v-for="item in items" :key="item.value" @click="toggle(item)">{{ item.label }}</a-button>
</div>
</template>

<script>
export default {
  name: "multi-select-buttons",
  data() {
    return {
      allChecked: true
    }
  },
  props: {
    items: {
      default() {
        return []
      }
    },
    value: {
      default() {
        return []
      }
    },
    // 복수 선택 가능 여부
    multipleSelect: {
      default() {
        return true
      }
    }
  },
  computed: {
    allCheckedComputed() {
      return this.items.length == this.value.length
    }
  },
  methods: {
    checkAll() {
      this.allChecked = true
      this.$emit('input', [])
    },
    toggle(item) {
      if (this.multipleSelect) {
        let newValue = [...this.value]
        let index = newValue.indexOf(item.value)
        if (index >= 0) {
          newValue.splice(index, 1)
        } else {
          newValue.push(item.value)
          this.allChecked = false
        }
        this.$emit('input', newValue)
      } else {
        // 단일 선택
        this.allChecked = false
        this.$emit('input', [item.value])
      }
    }
  },
  watch: {
    allCheckedComputed(v) {
      if (v) {
        this.checkAll()
      }
    },
    value(v) {
      if(v.length == 0) {
        this.allChecked = true
      }
    }
  }
}
</script>

<style scoped>
.sub-button {
  margin: 0 2px;
}
</style>
