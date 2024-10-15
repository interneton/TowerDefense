import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../models/user.model.js';
import { addUserInfo } from '../models/userinfo.model.js';
import { handleConnection, handleDisconnect, handleEvent, issueToken } from './helper.js';
import { CLIENT_VERSION } from '../constants.js';

const registerHandler = (io) => {
  io.on('connection', async (socket) => {
    // 최초 커넥션을 맺은 이후 발생하는 각종 이벤트를 처리하는 곳
    const clientVersion = socket.handshake.query.clientVersion;

    // 클라이언트 버전 검사
    if (!CLIENT_VERSION.includes(clientVersion)) {
      socket.emit('stop', { message: '클라이언트 버전이 낮습니다.' });
      return 0;
    }

    const decodedToken = issueToken(socket);
    console.log(decodedToken);

    // 모든 토큰이 만료된 경우
    if (!decodedToken) {
      socket.emit('stop', { message: '재로그인이 필요합니다.' });
      return 0;
    }

    const userUUID = decodedToken.id;

    await addUserInfo(userUUID); // 사용자 추가

    // accessToken이 만료된 경우.
    if (decodedToken.isRefresh) {
      handleConnection(socket, userUUID, {
        accessToken: decodedToken.accessToken,
        refreshToken: decodedToken.refreshToken,
      });
    } else {
      handleConnection(socket, userUUID, null);
    }

    // 모든 서비스 이벤트 처리
    socket.on('event', (data) => handleEvent(io, socket, data));
    // 접속 해제시 이벤트 처리
    socket.on('disconnect', () => handleDisconnect(socket, userUUID));
  });
};

export default registerHandler;
