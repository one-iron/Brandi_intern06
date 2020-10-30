<template>
  <div>
    <a-input-group>
      <a-row :gutter="8" class="filter-row">
        <a-col :span="22">
          <a-radio-group @change="changeFilterType" v-model="status.filterType">
            <a-radio :value="0">선택안함</a-radio>
            <a-radio :value="1">주문번호</a-radio>
            <a-radio :value="2">주문상세번호</a-radio>
            <a-radio :value="3">주문자명</a-radio>
            <a-radio :value="4">핸드폰번호</a-radio>
            <a-radio :value="5">셀러명</a-radio>
            <a-radio :value="6">상품명</a-radio>
          </a-radio-group><br/>
          <!-- 검색 필드별로 입력값을 관리하기 위해서 따로 따로 UI관리 -->
          <template v-for="item in filterTypes">
            <a-input-search v-show="status.filterType==item.typeNo"
                            v-if="item.mask"
                            placeholder="검색어를 입력해주세요."
                            v-model.uppercase="item.keywordValue"
                            ref="keyword"
                            :disabled="item.typeNo==0"
                            v-mask="item.mask"
                            style="width: 70%"/>
            <a-input-search v-show="status.filterType==item.typeNo"
                            v-if="!item.mask"
                            placeholder="검색어를 입력해주세요."
                            v-model.uppercase="item.keywordValue"
                            ref="keyword"
                            :disabled="item.typeNo==0"
                            style="width: 70%"/>
          </template>
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row" :class="{'dont-need':!status.needMoreFilter}">
        <a-col :span="2" class="filter-label">결제완료일</a-col>
        <a-col :span="10">
          <multi-select-buttons :multiple-select="false" :items="constants.orderDateFilter" v-model="status.orderDateFilter" :disabled="!status.needMoreFilter"/>
          <a-range-picker @change="changeDatePicker" :placeholder="['시작일', '종료일']" v-model="filter.rangeDate" :disabled="!status.needMoreFilter"/>
        </a-col>
      </a-row>
      <a-row :gutter="8" class="filter-row" :class="{'dont-need':!status.needMoreFilter}">
        <a-col :span="2" class="filter-label">셀러속성</a-col>
        <a-col :span="22">
          <multi-select-buttons :items="constants.sellerSections" v-model="filter.sellerSection" :disabled="!status.needMoreFilter"/>
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
import moment from 'moment'

export default {
  name: "filter-box",
  components: {MultiSelectButtons},
  data() {
    return {
      filterTypes: [],
      status: {
        needMoreFilter: true, // 추가 조건이 필요한가
        filterType: 0,
        orderDateFilter: [1],
      },
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
        {label: '상품명', value: 'productName'},
        {label: '상품코드', value: 'productCode'},
        {label: '상품번호', value: 'productNo'},
      ]
    }
  },
  computed : {
    constants() {
      return this.$store.state.const
    },
    filterMask() {
      switch (this.status.filterType) {
        case 1:
        case 2:
          return this.constants.orderCodeMask
      }
    }
  },
  created() {
    this.setDateRange(this.status.orderDateFilter)
    // 리셋 기능을 위해 clone 데이터 생성
    this.backupFilter = JSON.parse(JSON.stringify(this.filter))
    this.backupStatus = JSON.parse(JSON.stringify(this.status))
    // 선택안함
    this.filterTypes.push({
      'typeNo': 0,
      'keywordValue': '',
    })
    // 주문코드
    this.filterTypes.push({
      'typeNo': 1,
      'keywordValue': '',
      'mask': this.constants.orderCodeMask
    })
    // 주문상세코드
    this.filterTypes.push({
      'typeNo': 2,
      'keywordValue': '',
      'mask': this.constants.orderCodeMask
    })
    // 주문자명
    this.filterTypes.push({
      'typeNo': 3,
      'keywordValue': '',
    })
    // 핸드폰번호
    this.filterTypes.push({
      'typeNo': 4,
      'keywordValue': '',
      'mask': '###-####-####'
    })
    // 셀러명
    this.filterTypes.push({
      'typeNo': 5,
      'keywordValue': '',
    })
    // 한글명
    this.filterTypes.push({
      'typeNo': 6,
      'keywordValue': '',
    })

  },
  mounted () {
  },
  methods: {
    changeFilterType() {
      this.$nextTick(()=>{
        this.$refs.keyword[this.status.filterType].focus()
        this.status.needMoreFilter = ![1,2].includes(this.status.filterType)
      })
    },
    search() {
      console.log('검색한다', this.filter)
    },
    changeDatePicker(v) {
      console.log(v)
    },
    resetFilter() {
      this.filter = JSON.parse(JSON.stringify(this.backupFilter))
      this.status = JSON.parse(JSON.stringify(this.backupStatus))
    },
    setDateRange(v) {
      if (v !== undefined) {
        this.filter.rangeDate = [moment().subtract(v-1, 'day'), moment()]
      } else {
        this.filter.rangeDate = []
      }
    }
  },
  watch: {
    'status.orderDateFilter'(v) {
      if (v.length > 0) {
        this.setDateRange(v[0])
      } else {
        this.setDateRange(undefined)
      }
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
  min-height: 32px;
  margin: 5px 0;
}
.filter-row.dont-need {
  color: #999;
}
.filter-label {
  font-weight: bold;
  text-indent: 5px;
}
</style>
