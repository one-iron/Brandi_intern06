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
        <a-col :span="2" class="filter-label">셀러명</a-col>
        <a-col :span="7"><a-input-search placeholder="검색어를 입력해주세요." v-model="filter.sellerName"/></a-col>
        <a-col :span="2">
          <a-select style="width: 100%" v-model="filter.keywordType">
            <a-select-option value="">Select...</a-select-option>
            <a-select-option v-for="item in items" :key="value" :value="item.value">{{ item.label }}</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="5">
          <a-input-search placeholder="검색어를 입력해주세요." v-model="filter.keywordValue"/>
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="2" class="filter-label">셀러속성</a-col>
        <a-col :span="22">
          <multi-select-buttons :items="sellerSections" v-model="filter.sellerSection"/>
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="2" class="filter-label">판매여부</a-col>
        <a-col :span="7">
          <multi-select-buttons :multiple-select="false" :items="saleTypes" v-model="filter.saleType"/>
        </a-col>
        <a-col :span="2" class="filter-label">진열여부</a-col>
        <a-col :span="7">
          <multi-select-buttons :multiple-select="false" :items="exhibitTypes" v-model="filter.exhibitType"/>
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="2" class="filter-label">할인여부</a-col>
        <a-col :span="7">
          <multi-select-buttons :multiple-select="false" :items="discountTypes" v-model="filter.discountType"/>
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
import MultiSelectButtons from './multi-select-buttons'
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
        {label: '주문번호', value: 'orderNo'},
        {label: '주문상세번호', value: 'orderDetailNo'},
        {label: '주문자명', value: 'orderName'},
        {label: '핸드폰번호', value: 'phoneNo'},
        {label: '셀러명', value: 'sellerName'},
        {label: '상품명', value: 'productName'},
      ],
      sellerSections: [
        {label: '쇼핑몰', value: 1},
        {label: '마켓', value: 2},
        {label: '로드샵', value: 3},

        {label: '디자이너브랜드', value: 4},
        {label: '제너럴브랜드', value: 5},
        {label: '내셔널브랜드', value: 6},

        {label: '뷰티', value: 7},
      ],
      saleTypes: [
        {label: '판매', value: 'Y'},
        {label: '미판매', value: 'N'},
      ],
      exhibitTypes: [
        {label: '진열', value: 'Y'},
        {label: '미진열', value: 'N'},
      ],
      discountTypes: [
        {label: '할인', value: 'Y'},
        {label: '미할인', value: 'N'},
      ]
    }
  },
  created() {
    // 리셋 기능을 위해 clone 데이터 생성
    this.backupFilter = JSON.parse(JSON.stringify(this.filter))
  },
  methods: {
    search() {
      console.log('검색한다', this.filter)
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
