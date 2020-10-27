<template>
  <div>
    <a-descriptions bordered size="small" class="seller-from" label-width="20%">
      <a-descriptions-item :span="3">
        <template slot="label">
          셀러 프로필 <span class="required">*</span>
        </template>
        <image-upload />
      </a-descriptions-item>
      <a-descriptions-item label="셀러 상태" :span="3">
        입점
      </a-descriptions-item>
      <a-descriptions-item label="셀러 속성" :span="3">
        <a-radio-group v-model="filter.seller_property_id">
          <a-radio :value="1">쇼핑몰</a-radio>
          <a-radio :value="2">마켓</a-radio>
          <a-radio :value="3">로드샵</a-radio>
        </a-radio-group>
      </a-descriptions-item>
      <a-descriptions-item label="셀러 한글명" :span="3">
        <a-input placeholder="셀러 한글명" class="normal-size" v-model="filter.brand_name_korean" />
      </a-descriptions-item>
      <a-descriptions-item label="셀러 영문명" :span="3">
        <a-input placeholder="셀러 영문명" class="normal-size" v-model="filter.brand_name_english" />
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
import ImageUpload from '../../../Components/image-upload'
export default {
  components: {
    ImageUpload
  },
  data() {
    return {
      filter: {
        seller_property_id: 1,
        brand_name_english: '',
        brand_name_korean: ''
      },
    }
  },
  methods: {
    setFormData(value) {

    },
    getFromData() {
      return JSON.stringify(JSON.parse(this.filter))
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
.required {
  color: red
}
</style>
