<template>
  <div>
    <h2>셀러 계정 관리 </h2>
    <filter-box @search="search"></filter-box>
    <div class="divide">
      <a-select style="width: 100px; float:right; " v-model="dataStore.pageLen">
        <a-select-option :value="item.value" v-for="item in rowCounts" :key="item.value">{{ item.label }}</a-select-option>
      </a-select>
      <div style="float:left; line-height: 32px;"> 회원 관리 > 셀러 계정 관리 > 셀러 회원 리스트</div>
      <div style="clear:both"></div>
    </div>
    <div class="table-header-buttons">
      <a-button size="small" type="success">전체셀러 엑셀다운로드</a-button>
    </div>

    <board-list :data-store="dataStore" :height="500">
      <template slot="header">
        <th>번호</th>
        <th>셀러아이디</th>
        <th>영문이름</th>
        <th>한글이름</th>
        <th>담당자이름</th>
        <th>셀러상태</th>
        <th>담당자연락처</th>
        <th>담당자이메일</th>
        <th>셀러속성</th>
        <th>상품개수</th>
        <th>URL</th>
        <th>등록일시</th>
        <th>Actions</th>
      </template>
      <template slot="row" slot-scope="{item}">
        <td>{{ item.sellerNo }}</td> <!-- 번호 -->
        <td>{{ item.sellerId }}</td> <!-- 셀러아이디 -->
        <td>{{ item.sellerEnName }}</td> <!-- 영문이름 -->
        <td><router-link :to="'sellers/'+item.sellerNo">{{ item.sellerName }}</router-link></td> <!-- 한글이름 -->
        <td>{{ item.managerName }}</td> <!-- 담당자이름 -->
        <td>{{ item.sellerStatus }}</td> <!-- 셀러상태 -->
        <td>{{ item.managerPhoneNo }} </td> <!-- 담당자연락처 -->
        <td>{{ item.managerEmail }}</td> <!-- 담당자이메일 -->
        <td>{{ item.sellerType }}</td> <!-- 셀러속성 -->
        <td>{{ item.productCount }}</td> <!-- 상품개수 -->
        <td>{{ item.shopUrl }}</td> <!-- URL -->
        <td>{{ item.registDate }}</td> <!-- 등록일시 -->
        <td>
          <template v-for="action in constants.sellerStatusActions[item.sellerStatusNo]">
            <a-button :type="action.type" size="small" @click="changeSellerStatus(item, action.value)">{{ action.label }}</a-button>
          </template>
          <a-button type="normal" size="small" @click="moveToShop(item)">Web</a-button>
        </td>
      </template>
    </board-list>
  </div>
</template>

<script>
import Vue from 'vue'
import store from './seller-store'
import FilterBox from './filter-box'
import BoardList from '../../../Components/BoardList'

export default {
  name: 'seller-list',
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
    changeSellerStatus(row, action) {
      console.log('셀러 상태 변경', row, action)
    },
    moveToShop(row) {
      console.log('셀러 웹으로 이동', row)
    },
    search(filter) {
      console.log('검색한다 부모', filter)
      this.dataStore.load()
    }
  },
  computed: {
    constants() {
      return this.$store.state.const
    }
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
