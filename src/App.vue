<template>
  <a-config-provider :locale="locale">
  <div id="app">
    <router-view />
  </div>
  </a-config-provider>
</template>

<script>
import koKr from 'ant-design-vue/lib/locale-provider/ko_KR';
export default {
  name: "App",
  data() {
    return {
      locale: koKr
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
