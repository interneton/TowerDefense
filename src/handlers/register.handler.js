import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../models/user.model.js';
import { handleConnection, handleDisconnect, handleEvent, issueToken } from './helper.js';
import {CLIENT_VERSION} from '../constants.js'


const registerHandler = (io) => {
  io.on('connection', (socket) => {
    // 최초 커넥션을 맺은 이후 발생하는 각종 이벤트를 처리하는 곳
    const clientVersion = socket.handshake.query.clientVersion;

    // 클라이언트 버전 비교!
    if(!CLIENT_VERSION.includes(clientVersion)){
      // 무엇을 해야할까 안맞으면..
      socket.emit('disconnect', { message : "클라이언트 버전이 낮습니다." });
    }
    
    const decodedToken = issueToken(socket);
    console.log(decodedToken)

    // 모든 토큰이 만료된 경우
    if(!decodedToken){
      socket.emit('disconnect', { message : "재로그인이 필요합니다." });
      return 0;
    }

    const userUUID = decodedToken.id

    addUser({ userUUID: userUUID , socketId: socket.id }); // 사용자 추가

    // accessToken이 만료된 경우.
    if(decodedToken.isRefresh){
      handleConnection(socket, userUUID, decodedToken.accessToken, decodedToken.refreshToken);
    } else {
      handleConnection(socket, userUUID);
    }
    
    // 모든 서비스 이벤트 처리
    socket.on('event', (data) => handleEvent(io, socket, data));
    // 접속 해제시 이벤트 처리
    socket.on('disconnect', () => handleDisconnect(socket, userUUID));
  });
};

export default registerHandler;