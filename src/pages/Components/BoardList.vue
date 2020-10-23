<template>
  <div class="region">
    <div class="total">
      전체 조회건 수 : <strong>{{ dataStore.total | makeComma }}</strong>건
    </div>
    <div class="table-box">
      <table class="column-bordered-table">
        <thead>
        <tr>
          <th><a-checkbox v-model="markAll"/></th>
          <slot name="header"></slot>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in dataStore.list" :key="item.no">
          <td><a-checkbox v-model="item.checked"/></td>
          <slot name="row" :item="item"></slot>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="papenation">
      <a-pagination v-model="dataStore.page" :total="dataStore.total" :pageSize="dataStore.pageLen" show-less-items @change="dataStore.changePage"/>
    </div>
    <transition name="fade-spiner">
      <div class="spiner-box" v-show="dataStore.loading">
        <div class="spiner">
          <a-spin tip="Loading...">
          </a-spin>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import store from './boardStore'

export default {
  name: 'board-list',
  components: {},
  props: {
    dataStore: {
      default() {
        return new Vue(store)
      }
    }
  },
  data () {
    return {
      loading: true,
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
.total {
  margin: 5px;
  font-size: 13px;
}
.table-box {
  min-width: 100%;
  height: 500px;
  overflow-x: auto;
  overflow-y: auto;
  border: 1px solid #c3c3c3;
  border-left: none;
  border-right: none;
}
.column-bordered-table {
  width: 100%;
}
.column-bordered-table thead th, .column-bordered-table thead td {
  border-left: 1px solid #EEE;
  border-right: 1px solid #EEE;
  background-color: #F3F3F3 !important;
  white-space: nowrap;
  height: 40px;
  position: sticky;
  top: 0;
  z-index: 2;
  /*height: 20px !important;*/
  text-align: center;
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
  -webkit-transition:background-color .3s;
  transition:background-color .3s;
}
.column-bordered-table tr:hover td {
  background-color: #edf1f5;
}

.column-bordered-table tfoot tr {
  border-top: 1px solid #EEE;
  border-bottom: 1px solid #EEE;
}
.region {
  position: relative;
}
.spiner-box {
  /*opacity: 1;*/
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  background: rgba(0,0,0,0.2);
}
.fade-spiner-enter-active, .fade-spiner-leave-active { transition: opacity .3s } .fade-spiner-enter, .fade-spiner-leave-to { opacity: 0 }

.papenation {
  text-align: center;
  margin: 5px auto;
}

</style>
