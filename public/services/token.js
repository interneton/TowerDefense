let token = null;

// 토큰 저장하기
function setAccessToken(newToken) {
  token = newToken;
}

// 토큰 가져오기
function getAccessToken() {
  return localStorage.getItem('');
  return token;
}

// 토큰 비우기
function clearToken() {
  token = null;
}
