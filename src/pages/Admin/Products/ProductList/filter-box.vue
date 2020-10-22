<template>
  <div>
      <select outlined :items="items" placeholder="Select...">
        <option>aaa</option>
      </select>
      <input type="text" placeholder="검색어를 입력해주세요."/>

  </div>
</template>

<script>
export default {
  name: "filter-box",
  data() {
    return {
      items: [
        '주문번호',
        '주문상세번호',
        '주문자명',
        '핸드폰번호',
        '셀러명',
        '상품명'
      ],
    }
  }
}
</script>

<style scoped>

</style>
