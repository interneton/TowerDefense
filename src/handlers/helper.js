import { getUsers, removeUser } from '../models/user.model.js';
import { createStage, getStage } from '../models/stage.model.js';
import { CLIENT_VERSION } from '../constants.js';
import { validateToken, createAccessToken, createRefreshToken } from '../utils/tokens/tokens.js';
import handlerMappings from './handlerMapping.js';

export const handleConnection = (socket, userUUID) => {
  console.log(`New user connected: ${userUUID} with socket ID ${socket.id}`);
  console.log('Current users:', getUsers());

  // 스테이지 빈 배열 생성
  createStage(userUUID);

  // 필요 데이터 불러오기
  socket.emit('connection', { uuid: userUUID });
};

export const handleDisconnect = (socket, uuid) => {
  removeUser(socket.id); // 사용자 삭제
  console.log(`User disconnected: ${socket.id}`);
  console.log('Current users:', getUsers());
};

export const handleEvent = async (io, socket, data) => {
  if (!CLIENT_VERSION.includes(data.clientVersion)) {
    socket.emit('response', { status: 'fail', message: 'Client version mismatch' });
    return;
  }

  const handler = handlerMappings[data.handlerId];
  if (!handler) {
    socket.emit('response', { status: 'fail', message: 'Handler not found' });
    return;
  }

  const response = await handler(data.userId, data.payload, socket);
  if (response && response.broadcast) {
    io.emit('response', 'broadcast');
    return;
  }
  
  socket.emit('response', response);
};

export const issueToken = (socket) =>{
  const {refreshToken, token} = socket.handshake.auth;
  let decodedToken = validateToken(token, process.env.OUR_SECRET_ACCESS_KEY);
  let isRefresh = false;

  // accessToken이 만료된 경우.
  if(!decodedToken){
    // 토큰 유효성 검사
    decodedToken = validateToken(refreshToken, process.env.OUR_SECRET_ACCESS_KEY)
    if(!decodedToken){
      return 0
    }

    const newAccessToken = createAccessToken();
    const newRefreshToken = createRefreshToken();
    isRefresh = true;

    decodedToken["accessToken"] = newAccessToken;
    decodedToken["refreshToken"] = newRefreshToken;
  }
  decodedToken["isRefresh"] = isRefresh;

  return decodedToken
}