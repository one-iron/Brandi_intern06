<template>
  <div>
    <a-input-group>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="2" class="filter-label">조회기간</a-col>
        <a-col :span="7">
          <a-range-picker @change="changeDatePicker" :placeholder="['시작일', '종료일']" v-model="filter.rangeDate" />
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="2" class="filter-label">셀러한글명</a-col>
        <a-col :span="7"><a-input-search placeholder="검색어를 입력해주세요." v-model="filter.sellerName"/></a-col>
        <a-col :span="8">
          <a-input-group compact>
            <a-select v-model="filter.keywordType">
              <a-select-option value="">Select... &nbsp;&nbsp;&nbsp;</a-select-option>
              <a-select-option v-for="item in items" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>
            </a-select>
            <a-input-search placeholder="검색어를 입력해주세요." v-model="filter.keywordValue" style="width: 70%"/>
          </a-input-group>
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="2" class="filter-label">셀러속성</a-col>
        <a-col :span="22">
          <multi-select-buttons :items="constants.sellerSections" v-model="filter.sellerSection"/>
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="2" class="filter-label">셀러상태</a-col>
        <a-col :span="22">
          <multi-select-buttons :multiple-select="false" :items="constants.sellerStatus" v-model="filter.exhibitType"/>
        </a-col>
      </a-row>
    </a-input-group>
    <div class="search-buttons">
      <a-button type="primary" size="large" @click="search">검색</a-button>
      <a-button type="normal" size="large" @click="resetFilter">초기화</a-button>
    </div>
  </div>
</template>

<script>
import MultiSelectButtons from '../../../Components/multi-select-buttons'

export default {
  name: "filter-box",
  components: {MultiSelectButtons},
  data() {
    return {
      filter: {
        sellerSection: [],
        saleType: [],
        exhibitType: [],
        sellerName: '',
        keywordType: '',
        keywordValue: '',
        discountType: '',
        rangeDate: null
      },
      items: [
        {label: '셀러번호', value: 'sellerNo'},
        {label: '셀러아이디', value: 'sellerId'},
        {label: '셀러영문명', value: 'sellerEnName'},
        {label: '담당자이름', value: 'managerName'},
        {label: '담당자연락처', value: 'managerPhoneNo'},
        {label: '담당자이메일', value: 'managerEmail'},
      ]
    }
  },
  computed : {
    constants() {
      return this.$store.state.const
    }
  },
  created() {
    // 리셋 기능을 위해 clone 데이터 생성
    this.backupFilter = JSON.parse(JSON.stringify(this.filter))
  },
  mounted () {
  },
  methods: {
    search() {
      console.log('검색한다', this.filter)
      this.$emit('search', this.filter)
    },
    changeDatePicker(v) {
      console.log(v)
    },
    resetFilter() {
      this.filter = JSON.parse(JSON.stringify(this.backupFilter))
    }
  }
}
</script>

<style scoped>
.search-buttons {
  text-align: center;
  margin: 10px 0;
}
.filter-row {
  height: 32px;
  margin: 5px 0;
}
.filter-label {
  font-weight: bold;
  text-indent: 5px;
}
</style>
