import { refreshAccessToken } from '../services/generate.js';

const fetchAPI = (method, url, body = null, isAuthorization = false) => {
  console.log(`${url} 요청중...`);
  return new Promise((resolve, reject) => {
    const reqObj = {};
    const headers = { 'Content-Type': 'application/json' };

    // 인증이 필요한경우 액세스토큰이 만료되었는지 확인한다.
    if (isAuthorization) {
      const accessAuth = `Bearer ${getAccessToken()}`;

      refreshAccessToken(accessAuth)
        .then((res) => {
          if (res) {
            console.log(`새로운 토큰을 발급받았습니다. ${res}`);
            setAccessToken(res);
            headers['authorization'] = `Bearer ${getAccessToken()}`;
          }
          if (!res) {
            console.log('토큰 유지합니다.');
            headers['authorization'] = `Bearer ${getAccessToken()}`;
          }
        })
        .then(() => {
          if (body !== null) {
            reqObj['body'] = JSON.stringify(body);
          }
          reqObj['method'] = method;
          reqObj['headers'] = headers;
          reqObj['credentials'] = 'include';

          return fetch(url, reqObj);
        })
        .then((res) => resolve(res))
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    } else {
      if (body !== null) {
        reqObj['body'] = JSON.stringify(body);
      }
      reqObj['method'] = method;
      reqObj['headers'] = headers;
      reqObj['credentials'] = 'include';

      return fetch(url, reqObj)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    }
  });
};

export async function registAccount(body) {
  const res = await fetchAPI('POST', '/api/account/regist', body, false);
  if (res.status === 201) {
    alert('회원가입 성공! 로그인 화면으로 이동합니다.');
    return true;
  } else if (res.status === 409) {
    alert('이미 존재하는 아이디입니다.');
    return false;
  } else if (res.status === 412) {
    alert('비밀번호는 6자 이상이어야 합니다.');
    return false;
  } else {
    alert('500 Server Error');
    return false;
  }
}

/** 계정 로그인 API 호출 */
export async function loginAccount(body) {
  const res = await fetchAPI('POST', '/api/account/login', body, false);
  // 유효성 검증 실패
  if (res.status === 401) {
    alert('비밀번호가 일치하지 않습니다.');
  }
  if (res.status === 404) {
    alert('아이디가 존재하지 않습니다.');
  }
  return res.json();
}

/** 계정 초기화 */
export async function resetAccount(body) {
  const res = await fetchAPI('POST', '/api/account/reset', body, false);
  // 유효성 검증 실패
  if (res.status === 401) {
    alert(res.message);
  }
  if (res.status === 404) {
    alert(res.message);
  }
  return res.json();
}
