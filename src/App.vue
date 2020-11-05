<template>
  <a-config-provider :locale="locale">
  <div id="app">
    <router-view />
  </div>
  </a-config-provider>
</template>

<script>
// 한국어 대응
import koKr from 'ant-design-vue/lib/locale-provider/ko_KR';
import store from './vuex/store'
import Vue from 'vue'
import Utils from './utils/utils.js'

Vue.filter("makeComma", val => {
  return Utils.makeComma(val)
})
Vue.filter("emptyDash", val => {
  if (val === undefined) return '-'
  if (val === null) return '-'
  if (val === '') return '-'
  return val
})
export default {
  name: "App",
  store: store,
  data() {
    return {
      locale: koKr
    }
  },
  created () {
    Vue.filter("typeToName", (val, type)=> {
      let statusItem = this.$store.state.const[type].filter((d)=>{return d.value == val})
      if (statusItem.length > 0) return statusItem[0].label
      return ''
    })
  }
};


</script>

<style lang="scss" scoped>
/*@import './styles/_reset.scss';*/
</style>
<style>
/*공통 CSS*/
i {
  font-style: normal;
}
span.info {
  color: #298ae6;
}
.required {
  color: red
}
.large-size {
  width: 400px;
}
.normal-size {
  width: 200px;
}
.small-size {
  width: 100px;
}
table.bordered th {
  background: #fafafa;
}
table.bordered th, table.bordered td{
  border: 1px solid #e8e8e8;
  padding: 10px 15px;
  font-size: 13px;
}
h2 > span {
  font-size: 14px;
  font-weight: normal;
  color: #999;
}
</style>
