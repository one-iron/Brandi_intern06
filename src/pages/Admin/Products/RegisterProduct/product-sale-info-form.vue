<template>
  <div>
    <a-descriptions bordered size="small" class="seller-from" label-width="20%">
      <a-descriptions-item :span="3">
        <template slot="label">판매가 <span class="required">*</span></template>
        <a-input placeholder="판매가" class="normal-size"/><br/>
      </a-descriptions-item>
      <a-descriptions-item label="할인정보" :span="3">
        <table class="bordered" style="width: 500px">
          <thead>
          <tr>
            <th>할인율</th>
            <th>할인가</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><a-input/></td>
            <td>0 원 <a-button type="primary">할인판매가적용</a-button></td>
          </tr>
          <tr>
            <td>할인팬매가</td>
            <td>0 원</td>
          </tr>
          <tr>
            <td>할인기간</td>
            <td>
              <a-radio-group>
                <a-radio>무기한</a-radio>
                <a-radio>기간설정</a-radio>
              </a-radio-group>
            </td>
          </tr>
          </tbody>
        </table>

      </a-descriptions-item>
      <a-descriptions-item :span="3" label="최소판매수량">
        <a-radio-group>
          <a-radio value="1">1개 이상</a-radio>
          <a-radio :value="2">
            <a-input class="normal-size"/>개 이하 (20개를 초과하여 설정하실 수 없습니다)
          </a-radio>
        </a-radio-group>
      </a-descriptions-item>
      <a-descriptions-item :span="3" label="최대판매수량">
        <a-radio-group>
          <a-radio value="1">20개</a-radio>
          <a-radio :value="2">
            <a-input class="normal-size"/>개 이하 (20개를 초과하여 설정하실 수 없습니다)
          </a-radio>
        </a-radio-group>
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
