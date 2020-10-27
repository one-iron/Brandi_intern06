<template>
  <div>
    <a-descriptions bordered size="small" class="seller-from" label-width="20%">
      <a-descriptions-item label="셀러페이지 배경이미지" :span="3">
        <image-upload />
      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">셀러 한줄 소개 <span class="required">*</span></template>
        <a-input placeholder="셀러 한줄 소개" class="normal-size" />
      </a-descriptions-item>
      <a-descriptions-item label="셀러 상세 소개" :span="3">
        <a-textarea placeholder="셀러 상세 소개"></a-textarea>
      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">사이트 URL <span class="required">*</span></template>
        <a-input placeholder="셀러 한줄 소개" class="normal-size" />
      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">담당자 정보 <span class="required">*</span></template>
        <div v-for="(item, i) in managers">
          <hr v-if="i > 0">
          <div class="manager">
            <a-input placeholder="담당자명" class="normal-size" v-model="item.managerName" /><br/>
            <a-input placeholder="담당자 핸드폰번호" class="normal-size" v-model="item.managerPhoneNo" /><br/>
            <a-input placeholder="담당자 이메일" class="normal-size" v-model="item.managerEmail"/>
          </div>
          <div v-show="managers.length-1 == i" class="manager-button">
            <a-button type="success" @click="addManager" v-show="managers.length < 3">+</a-button>
            <a-button type="danger" @click="popManager" v-show="managers.length > 1">-</a-button>
          </div>
        </div>

      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">인스타그램 아이디 <span class="required">*</span></template>
        <a-input placeholder="인스타그램 아이디" class="normal-size" />
      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">고객센터 <span class="required">*</span></template>
        <a-input placeholder="고객센터 전화번호" class="normal-size" /><br/>
        <a-input placeholder="카카오톡 아이디" class="normal-size" /><br/>
        <a-input placeholder="옐로우 아이디" class="normal-size" />
      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">택배주소 <span class="required">*</span></template>
        <a-input placeholder="고객센터 전화번호" class="normal-size" />
        <a-button type="success" class="find-post-button">우편번호 찾기</a-button><br/>
        <a-input placeholder="카카오톡 아이디" class="normal-size" /><br/>
        <a-input placeholder="상세주소 (택배수령지)" class="normal-size" />
      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">고객센터 운영시간 (주중) <span class="required">*</span></template>
        시간 선택 컴포넌트
      </a-descriptions-item>
      <a-descriptions-item :span="3">
        <template slot="label">정산정보 입력 <span class="required">*</span></template>
        <a-input placeholder="고객센터 전화번호" class="normal-size" /><br/>
        <a-input placeholder="계좌번호" class="normal-size" /><br/>
        <a-input placeholder="계좌주" class="normal-size" />
      </a-descriptions-item>
      <a-descriptions-item :span="3" label="샐러상태 변경이력">

        <table class="bordered">
          <thead>
          <tr>
            <th>셀러상태 변경 적용일시</th>
            <th>셀러 상태</th>
            <th>변경 실행자</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2020-10-26 16:48:53	</td>
            <td>입점대기</td>
            <td>이원철</td>
          </tr>
          </tbody>
        </table>


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
      sellerType: 1,
      managers: [
        {
          'managerName': '',
          'managerEmail': '',
          'managerPhoneNo': ''
        }
      ]
    }
  },
  methods: {
    addManager() {
      if (this.managers.length < 3)
        this.managers.push({
          'managerName': '',
          'managerEmail': '',
          'managerPhoneNo': ''
        })
    },
    popManager() {
      if (this.managers.length > 1)
        this.managers.pop()
    }
  }
}
</script>

<style type="scss" scoped>
.normal-size {
  width: 200px;
}
br + .normal-size {
  margin-top: 5px;
}
.required {
  color: red
}
.manager {
  display: inline-block;
}
.manager-button {
  display: inline-block;
}
.find-post-button {
  margin-left: 5px;
}
hr {
  border: none;
  border-top: 1px solid #CCC;
}
table.bordered th {
  background: #fafafa;
}
table.bordered th, table.bordered td{
  border: 1px solid #e8e8e8;
  padding: 10px 15px;
  font-size: 13px;
}

</style>
