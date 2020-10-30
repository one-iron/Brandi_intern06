<template>
  <div>
    <a-descriptions bordered size="small" class="seller-from" label-width="20%" :column="2">
      <a-descriptions-item label="상품번호">
        17866501 (17866493)
      </a-descriptions-item>
      <a-descriptions-item label="상품명">
        201008_헬피_자율옵션_분리
      </a-descriptions-item>

      <a-descriptions-item label="상품 판매가">
        12,200 원
      </a-descriptions-item>
      <a-descriptions-item label="상품 할인율">
        0 %
      </a-descriptions-item>

      <a-descriptions-item label="브랜드명">
        브레스
      </a-descriptions-item>
      <a-descriptions-item label="옵션정보">
        중청/S
      </a-descriptions-item>

      <a-descriptions-item label="구매수량">
        1 개
      </a-descriptions-item>
      <a-descriptions-item label="적립예정포인트">
        122 포인트
      </a-descriptions-item>
    </a-descriptions>
    <product-history-modal ref="historyModal"/>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      data: {
        seller_property_id: 1,
        brand_name_english: '',
        brand_name_korean: '',
        gosiType: 1
      },
    }
  },
  computed: {
    firstCategory() {
      return this.$store.state.const.firstCategory
    },
    secondCategory() {
      return this.$store.state.const.secondCategory
    }
  },
  methods: {
    showHistoryModal() {
      this.$refs.historyModal.show()
    },
    setFormData(value) {

    },
    getFromData() {
      return JSON.stringify(JSON.parse(this.data))
    },
    validate() {
      return true
    }
  }
}
</script>

<style type="scss" scoped>
.normal-size {
  width: 200px;
}
</style>
<style type="scss" scoped>
.normal-size {
  width: 200px;
}
br + .normal-size {
  margin-top: 5px;
}
.manager {
  display: inline-block;
}
.manager-button {
  display: inline-block;
}
.find-post-button {
  margin-left: 5px;
}
hr {
  border: none;
  border-top: 1px solid #CCC;
}

</style>
