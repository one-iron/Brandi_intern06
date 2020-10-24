<template>
  <div>
    <filter-box></filter-box>
    <div class="divide">
      <a-select style="width: 100px; float:right; " v-model="dataStore.pageLen">
        <a-select-option :value="item.value" v-for="item in rowCounts" :key="item.value">{{ item.label }}</a-select-option>
      </a-select>
      <div style="float:left; line-height: 32px;">상품관리 / 상품 관리 > 상품관리 관리 > 리스트</div>
      <div style="clear:both"></div>
    </div>
    <div class="table-header-buttons">
      <a-button size="small" type="success">선택한상품 엑셀다운로드</a-button>
      <a-button size="small" type="success">전체상품 엑셀다운로드</a-button>
    </div>

    <board-list :data-store="dataStore" :height="500">
      <template slot="header">
        <th>등록일</th>
        <th>대표이미지</th>
        <th>상품명</th>
        <th>상품코드</th>
        <th>상품번호</th>
        <th>셀러속성</th>
        <th>셀러명</th>
        <th>판매가</th>
        <th>할인가</th>
        <th>판매여부</th>
        <th>진열여부</th>
        <th>할인여부</th>
        <th>Actions</th>
      </template>
      <template slot="row" slot-scope="{item}">
        <td>{{ item.registDate }}</td> <!-- 등록일 -->
        <td><img :src="item.imgUrl" width="70" height="70"></td> <!-- 대표이미지 -->
        <td>{{ item.productName }}</td> <!-- 상품명 -->
        <td><router-link :to="'products/'+item.productCode">{{ item.productCode }}</router-link></td> <!-- 상품코드 -->
        <td>{{ item.productNo }}</td> <!-- 상품번호 -->
        <td>{{ item.sellerType }}</td> <!-- 셀러속성 -->
        <td>{{ item.sellerName }}</td> <!-- 셀러명 -->
        <td>{{ item.salePrice | makeComma }}</td> <!-- 판매가 -->
        <td>{{ item.discountPrice | makeComma }} <span class="discount-rate" v-if="item.discountRate > 0">({{ item.discountRate }}%)</span></td> <!-- 할인가 -->
        <td>{{ item.saleYn }}</td> <!-- 판매여부 -->
        <td>{{ item.exhibitYn }}</td> <!-- 진열여부 -->
        <td>{{ item.discountYn }}</td> <!-- 할인여부 -->
        <td>
          <a-button type="primary" size="small" @click="buyProduct(item)">구매하기</a-button>
        </td>
      </template>
    </board-list>
  </div>
</template>

<script>
import Vue from 'vue'
import store from './product-store'
import FilterBox from './filter-box'
import BoardList from '../../../Components/BoardList'

export default {
  name: 'product-list',
  components: {BoardList, FilterBox},
  data () {
    return {
      dataStore: new Vue(store),
      rowCounts: [
        {label: '10개', value: 10},
        {label: '20개', value: 20},
        {label: '50개', value: 50},
      ]
    }
  },
  mounted () {
  },
  methods: {
    // 상품 구매
    buyProduct(row) {
      console.log('상품 구매', row)
    }
  },
  computed: {
  }
}
</script>
<style scoped>
.divide {
  background: #F1F1F1;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
}
.table-header-buttons {
  text-align: right;
  margin: 5px;
}
.discount-rate {
  color: red;
}

</style>
