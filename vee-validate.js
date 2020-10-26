import { configure } from 'vee-validate';
import { extend } from 'vee-validate/dist/vee-validate.full.esm';
import {
  numeric,
  alpha_dash,
  alpha_spaces,
  required
} from 'vee-validate/dist/rules';

configure({
  classes: {
    invalid: 'is-invalid'
  }
});

extend('required', {
  ...required,
  message: '필수 입력항목입니다.'
});

extend('alpha_dash', {
  ...alpha_dash,
  message:
    '{_field_}는 영문, 숫자, 언더바, 하이픈만 사용 가능하며 시작 문자는 영문 또는 숫자입니다.'
});

extend('alpha_spaces', {
  ...alpha_spaces,
  message: '영문만 입력해주세요.'
});

extend('same', {
  validate: (value, { serverId }) => {
    if (value === serverId) {
      return '중복된 아이디입니다.';
    } else {
      return true;
    }
  },
  params: ['serverId']
});

extend('korAlphaNum', {
  validate: value => {
    let regex = /^[가-힣|aA-zZ|0-9]*$/.test(value);
    if (!regex) {
      return '올바른 한글, 영문, 숫자만 입력해주세요.';
    } else {
      return true;
    }
  }
});

extend('numeric', {
  ...numeric,
  message: '{_field_}는 숫자만 입력해주세요.'
});

extend('min', {
  validate(value, { min }) {
    if (value.length >= min) {
      return true;
    }
    return '{_field_}는 {min} 글자 이상이어야 합니다.';
  },
  params: ['min']
});

extend('max', {
  validate(value, { max }) {
    if (value.length < max) {
      return true;
    }
    return '{_field_}는 {max} 글자 이하로 입력해주세요.';
  },
  params: ['max']
});

extend('siteCheck', {
  validate: value => {
    let regex = /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([aA-zZ|0-9-]+\.)+[aA-zZ|0-9]{2,4}.*$/;
    let regexBoolean = regex.test(value);
    if (regexBoolean) {
      return true;
    } else {
      return '올바른 주소를 입력해주세요. (ex. http://www.brandi.co.kr)';
    }
  }
});

extend('checkMatch', {
  validate(value, { target }) {
    if (value === target) {
      return true;
    } else {
      return '비밀번호가 일치하지 않습니다.';
    }
  },
  params: ['target']
});
