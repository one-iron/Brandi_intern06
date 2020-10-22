<template>
  <div>
    <filter-box></filter-box>
    <div class="divide">
      <a-select style="width: 100px; float:right; ">
        <a-select-option :value="item.value" v-for="item in rowCounts">{{ item.label }}</a-select-option>
      </a-select>
      <div style="float:left; line-height: 32px;">상품관리 / 상품 관리 > 상품관리 관리 > 리스트</div>
      <div style="clear:both"></div>
    </div>
    <div class="region">
      <div class="total">
        전체 조회건 수 : <strong>1,965,623</strong>건
      </div>
      <div style="height: 500px; overflow-x: auto; overflow-y: auto">
        <table class="column-bordered-table">
          <thead>
          <tr>
            <th><a-checkbox v-model="markAll"/></th>
            <!--            <th>등록상태</th>-->
            <th>등록일</th>
            <th>대표이미지</th>
            <th>상품명</th>
            <th>상품코드</th>

            <th>상품번호</th>
            <th>셀러속성</th>
            <th>셀러명</th>
            <!--            <th>셀러구분</th>-->

            <th>판매가</th>
            <th>할인가</th>
            <th>판매여부</th>
            <th>진열여부</th>
            <th>할인여부</th>

            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in dataStore.list" :key="item.no">
            <td><a-checkbox v-model="item.checked"/></td>
            <td>{{ item.registDate }}</td> <!-- 등록일 -->
            <td><img :src="item.imgUrl" width="70" height="70"></td> <!-- 대표이미지 -->
            <td>{{ item.productName }}</td> <!-- 상품명 -->
            <td>{{ item.productCode }}</td> <!-- 상품코드 -->

            <td>{{ item.productNo }}</td> <!-- 상품번호 -->
            <td>{{ item.sellerType }}</td> <!-- 셀러속성 -->
            <td>{{ item.sellerName }}</td> <!-- 셀러명 -->

            <td>{{ item.salePrice }}</td> <!-- 판매가 -->
            <td>{{ item.discountPrice }}</td> <!-- 할인가 -->
            <td>{{ item.saleYn }}</td> <!-- 판매여부 -->
            <td>{{ item.exhibitYn }}</td> <!-- 진열여부 -->
            <td>{{ item.discountYn }}</td> <!-- 할인여부 -->
            <!--            <td><a href="#" @click.prevent="moveDetail(item)">{{ item.title }}</a></td>-->
            <td>
              <a-button type="primary" size="small">
                구매하기
              </a-button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="papenation">
        <a-pagination v-model="dataStore.page" :total="50" show-less-items @change="dataStore.changePage"/>
        <!--        <v-pagination-->
<!--          :total-visible="10"-->
<!--          v-model="dataStore.page"-->
<!--          :length="dataStore.maxPage"-->
<!--          @input="dataStore.changePage"-->
<!--        />-->
      </div>
      <transition name="fade">
        <div class="spiner-box" v-show="dataStore.loading">
          <div class="spiner">
            <a-spin tip="Loading...">
              <div class="spin-content">
                loading
              </div>
            </a-spin>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import store from './store'
import FilterBox from './filter-box'

export default {
// extends: vuetify,
  name: 'product_list',
  components: {FilterBox},
  data () {
    return {
      loading: true,
      dataStore: new Vue(store),
      rowCounts: [
        {label: '10개', value: 10},
        {label: '20개', value: 20},
        {label: '50개', value: 50},
      ]
    }
  },
  methods: {
    moveDetail(row) {
      console.log(row)
    }
  },
  computed: {
    markAll: {
      set(v) {
        this.dataStore.list.forEach((d)=>{
          d.checked = v;
        })
      },
      get() {
        let noChecked = this.dataStore.list.filter((d)=>{
          return !d.checked;
        })
        if (noChecked.length > 0) return false;
        return true;
      }
    }
  }
}
</script>
<style scoped>
td>img {
  display: block;
}
.divide {
  background: #F1F1F1;
  padding: 5px 10px;
  font-size: 12px;
  font-width: bold;
}
.total {
  margin: 5px;
  font-size: 13px;
}
.column-bordered-table {
  border: 1px solid #c3c3c3;
  border-left: none;
  border-right: none;
}
.column-bordered-table thead th, .column-bordered-table thead td {
  border-left: 1px solid #EEE;
  border-right: 1px solid #EEE;
  background-color: #F3F3F3 !important;
  white-space: nowrap;
  height: 40px;
  position: sticky;
  top: 0;
  /*height: 20px !important;*/
}
.column-bordered-table thead tr.filter th {
  background-color: #FFF !important;
}

.column-bordered-table td:first-child {
  border-left: none;
}
.column-bordered-table td:last-child {
  border-right: none;
}
.column-bordered-table th:first-child {
  border-left: none;
}
.column-bordered-table th:last-child {
  border-right: none;
}
.column-bordered-table tr:nth-child(even){
  background-color: #f9f9f9;
}

.column-bordered-table td {
  border-left: 1px solid #EEE;
  border-right: 1px solid #EEE;
  padding: 8px !important;
  height: 23px !important;
  white-space: nowrap;
  font-size: 13px !important;
}

.column-bordered-table tfoot tr {
  border-top: 1px solid #EEE;
  border-bottom: 1px solid #EEE;
}
.region {
  position: relative;
}
.spiner-box {
  /*transition: opacity 1s;*/
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  background: rgba(0,0,0,0.1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.papenation {
  text-align: center;
  margin: 5px auto;
}

</style>
