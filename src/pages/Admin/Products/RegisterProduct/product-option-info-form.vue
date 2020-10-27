<template>
  <div>
    <a-descriptions bordered size="small" class="seller-from" label-width="20%">
      <a-descriptions-item label="옵션정보" :span="3">

        <table class="bordered">
          <thead>
          <tr>
            <th>옵션항목</th>
            <th>상품옵션명</th>
            <th>옵션값 추가/삭제</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>색상</td>
            <td><a-input/></td>
            <td><a-button type="normal">+</a-button></td>
          </tr>
          <tr>
            <td>사이즈</td>
            <td><a-input/></td>
            <td><a-button type="normal">+</a-button></td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <th>재고관리여부</th>
            <th colspan="2">
              <a-radio-group>
                <a-radio>재고 수량 관리 안함</a-radio>
                <a-radio>재고 수량 관리</a-radio>
              </a-radio-group>
            </th>
          </tr>
          </tfoot>
        </table>

        <a-button type="info">적용</a-button>

        <table class="bordered">
          <thead>
          <tr>
            <th colspan="2">상품옵션정보</th>
            <th>도매처옵션정보</th>
            <th rowspan="2">일반재고</th>
            <th rowspan="2"></th>
          </tr>
          <tr>
            <th>색상</th>
            <th>사이즈</th>
            <th>색상 / 사이즈</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><a-input/></td>
            <td><a-input/></td>
            <td><a-input/></td>
            <td>
              <a-radio-group>
                <a-radio>재고관리 안함</a-radio>
                <a-radio><a-input/>개</a-radio>
              </a-radio-group>
            </td>
            <td><a-button type="danger">-</a-button></td>
          </tr>
          </tbody>
        </table>

      </a-descriptions-item>

    </a-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sellerType: 1
    }
  }
}
</script>

<style type="scss" scoped>
.normal-size {
  width: 200px;
}
.required {
  color: red
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
