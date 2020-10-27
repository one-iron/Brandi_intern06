<template>
  <div>
    <div class="fixed-header">
      <h2>셀러정보 수정페이지
        <a-button type="success" @click="working=true">저장하기</a-button>
        <a-button type="normal" @click="working=false">취소</a-button>
        <a-spin spin v-show="working"/>
      </h2>
      <div class="divide">
        회원 관리 > 셀러 계정 관리 > 셀러 정보 조회 / 수정
      </div>
      <div class="form-header">
        <a-tabs type="card" :tabBarStyle="{'padding-bottom': 0, 'margin-bottom': '-1px'}" v-model="tabNo" @change="scrollTab">
          <a-tab-pane :key="0" tab="기본 정보" />
          <a-tab-pane :key="1" tab="상세 정보"/>
          <a-tab-pane :key="2" tab="배송정보 및 교환/환불 정보" />
        </a-tabs>
      </div>
    </div>
    <a-page-header title="기본 정보" key="1" sub-title="기본 정보" class="page-content" v-multi-ref:pageContent>
      <seller-basic-info-form></seller-basic-info-form>
    </a-page-header>
    <a-page-header title="상세 정보" key="2" class="page-content" v-multi-ref:pageContent>
      <seller-detail-info-form></seller-detail-info-form>
    </a-page-header>
    <a-page-header title="배송정보 및 교환/환불 정보" key="3" class="page-content" v-multi-ref:pageContent>
      <seller-delivery-info-form></seller-delivery-info-form>
    </a-page-header>

  </div>
</template>

<script>
import SellerBasicInfoForm from './seller-basic-info-form'
import SellerDetailInfoForm from './seller-detail-info-form'
import SellerDeliveryInfoForm from './seller-delivery-info-form'
import 'vue-multi-ref'

export default {
  name: 'register-seller',
  data() {
    return {
      tabNo: 0,
      working: false
    }
  },
  components: {
    SellerBasicInfoForm,
    SellerDetailInfoForm,
    SellerDeliveryInfoForm
  },
  mounted () {
    document.addEventListener('scroll', this.scrollEvent)
  },
  destroyed () {
    document.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrollEvent(event) {
      let pageContents = this.$refs.pageContent
      let len = pageContents.length
      // 마지막은 끝으로 인식
      if (document.body.scrollHeight - document.body.offsetHeight == document.body.scrollTop) {
        this.tabNo = len-1
        return
      }
      let elTop = this.getOffset2(this.$refs.pageContent[0].$el).top
      for (let i=0; i<len; i++) {
        if (pageContents[i].$el.getBoundingClientRect().top < elTop && pageContents[i].$el.getBoundingClientRect().bottom > elTop) {
          this.tabNo = i
        }
      }
    },
    scrollTab(tabNo) {
      let pageContents = this.$refs.pageContent
      let elTop = this.getOffset2(this.$refs.pageContent[0].$el).top
      window.scrollTo({top: this.getOffset2(pageContents[tabNo].$el).top - elTop, behavior: 'smooth'})
    },
    getOffset( el ) {
      var _x = 0;
      var _y = 0;
      while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    },
    getOffset2( el ) {
      var _x = 0;
      var _y = 0;
      while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft;
        _y += el.offsetTop;
        el = el.offsetParent;
        // if (el == document.body) break
      }
      return { top: _y, left: _x };
    }
},
  watch: {
    tabNo(v) {
      console.log('changeV', v)
    }
  }
}
</script>

<style type="scss" scoped>
.fixed-header {
  position: sticky;
  top: 45px;
  background: #FFF;
  z-index: 100;
  margin-top: -25px
}
.form-header {
  margin-top: 5px;
}
.divide {
  background: #F1F1F1;
  padding: 5px 10px;
  margin-left: -20px;
  margin-right: -20px;
  font-size: 12px;
  font-weight: bold;
}
.page-content {
  border: 1px solid #CCC;
  margin-bottom: 1em;
  background: #FFF;
}
h2 {
  padding-top: 10px
}
</style>
<style>
.seller-from .ant-descriptions-item-label {
  width: 190px
}
</style>

