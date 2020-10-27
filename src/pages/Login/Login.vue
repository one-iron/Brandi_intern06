<template>
  <div class="Login">
    <div class="loginBox">
      <h2>브랜디 어드민 로그인</h2>
      <input type="text" v-model="account" />
      <input type="password" v-model="password" />
      <div class="option">
        <div class="left">
          <input type="checkbox" />
          <span>아이디 / 비밀번호 기억하기</span>
        </div>
        <div class="right">
          <span>비밀번호를 잊으셨나요? </span>
        </div>
      </div>
      <div class="loginBtn" @click="checkValid()">로그인</div>
      <div class="signUp">
        <span>아직 셀러가 아닌신가요?</span>
        <span class="blueSignUp" @click="goSignUp">회원가입하기</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    goSignUp() {
      this.$router.push("/signup");
    },
    checkValid() {
      console.log("enter");
      if ((this.account.length !== 0) | (this.password.length !== 0)) {
        this.sendSumbit();
      }
    },

    //token 물어보기
    sendSumbit() {
      axios
        .post("http://192.168.7.25:5000/login", {
          account: this.account,
          password: this.password
        })
        .then(response => {
          console.log("response",response);
          if (response.data.access_token) {
            localStorage.setItem("access_token", response.data.access_token);
          }
        })
        .then(() => {
          this.$router.push("/admin");
        })
        .catch(err => {
          console.log(err.response);
          console.log(err.response.message);
          alert("입점 승인 대기중 입니다. 잠시만 기다려주세요 🤗");
        });
    }
  }
};
</script>

<style lang="scss">
.Login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginBox {
    width: 380px;
    height: 518px;
    // border: 1px solid gray;

    padding: 64px 30px 0 30px;
    margin: 0;
    vertical-align: top;
    box-sizing: border-box;

    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 31px 0 rgba(0, 0, 0, 0.1);

    h2 {
      margin: 0 0 25px 0;
      font-weight: 700 !important;
      font-size: 24px;
      text-align: left;
      line-height: 1.5;
      text-indent: 2px;
      letter-spacing: -1.5px;
    }

    .option {
      display: flex;
      justify-content: space-between;
      font-weight: 400;
      font-size: 12px;
      .right {
        color: red;
      }
    }

    input[type="text"],input[type="password"] {
      margin-bottom: 7px;
      border: 1px solid lightgrey;
      border-radius: 8px;
      background-color: white;
      text-indent: 30px;

      width: 100%;
      height: 45px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .loginBtn {
      display: block;
      width: 100%;
      margin-top: 20px;
      padding: 13px 0;
      font-size: 12px;
      color: #fff;
      background: #000;
      border-radius: 8px;

      border: 1px solid transparent;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
    }

    .signUp {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      font-size: 12px;

      color: #929292;
      letter-spacing: -0.6px;

      .blueSignUp {
        margin-left: 5px;
        color: #3c72ff;
        cursor: pointer;
      }
    }
  }
}
</style>
