<template>
  <div>
    <h2>주문 관리</h2>
    <filter-box></filter-box>
    <div class="divide">
      <a-select style="width: 100px; float:right; " v-model="dataStore.pageLen">
        <a-select-option :value="item.value" v-for="item in rowCounts" :key="item.value">{{ item.label }}</a-select-option>
      </a-select>
      <div style="float:left; line-height: 32px;">주문관리 > 상품준비 관리 > 상품준비 리스트</div>
      <div style="clear:both"></div>
    </div>
    <div class="table-header-buttons">
      <a-button size="small" type="success">선택한주문 엑셀다운로드</a-button>
      <a-button size="small" type="success">전체주문 엑셀다운로드</a-button>
    </div>

    <board-list :data-store="dataStore" :height="500">
      <template slot="header">
        <th>결제일자</th>
        <th>주문번호</th>
        <th>주문상세번호</th>
        <th>셀러명</th>
<!--        <th>셀러구분</th>-->
<!--        <th>헬피구분</th>-->
<!--        <th>배송구분</th>-->
        <th>상품명</th>
        <th>옵션정보</th>
<!--        <th>옵션추가금액</th>-->
        <th>수량</th>
        <th>주문자명</th>
        <th>핸드폰번호</th>
        <th>결제금액</th>
<!--        <th>사용포인트</th>-->
<!--        <th>쿠폰할인</th>-->
<!--        <th>결제수단</th>-->
        <th>주문상태</th>
      </template>
      <template slot="row" slot-scope="{item}">
        <td>{{ item.paymentDate }}</td> <!-- 결제일자 -->
        <td>{{ item.orderCode }}</td> <!-- 주문번호 -->
        <td><router-link :to="item.orderDetailCode">{{ item.orderDetailCode }}</router-link></td> <!-- 주문상세번호 -->
        <td>{{ item.sellerName }}</td> <!-- 셀러명 -->
        <!--        <th>셀러구분</th>-->
        <!--        <th>헬피구분</th>-->
        <!--        <th>배송구분</th>-->
        <td>{{ item.productName }}</td> <!-- 상품명 -->
        <td>{{ item.option }}</td> <!-- 옵션정보 -->
        <!--        <th>옵션추가금액</th>-->
        <td>{{ item.quantity }}</td> <!-- 수량 -->
        <td>{{ item.ordererName }}</td> <!-- 주문자명 -->
        <td>{{ item.ordererTelno }}</td> <!-- 핸드폰번호 -->
        <td>{{ item.paymentPrice }}</td> <!-- 결제금액 -->
        <!--        <th>사용포인트</th>-->
        <!--        <th>쿠폰할인</th>-->
        <!--        <th>결제수단</th>-->
        <td>{{ item.orderStatus }}</td> <!-- 주문상태 -->
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
        {label: '100개', value: 100},
        {label: '150개', value: 150},
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
  margin-left: -20px;
  margin-right: -20px;
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
