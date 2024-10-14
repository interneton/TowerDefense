import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../models/user.model.js';
import { handleConnection, handleDisconnect, handleEvent } from './helper.js';
import {validateToken} from '../utils/tokens/tokens.js';

const registerHandler = (io) => {
  io.on('connection', (socket) => {
    // 최초 커넥션을 맺은 이후 발생하는 각종 이벤트를 처리하는 곳
    const token = socket.handshake.auth.token;
    const clientVersion = socket.handshake.query.clientVersion;
    
    const decodedToken = validateToken(token, process.env.OUR_SECRET_ACCESS_KEY);
    console.log(decodedToken)
    
    const userUUID = decodedToken.id

    addUser({ userUUID: userUUID, socketId: socket.id }); // 사용자 추가

    handleConnection(socket, userUUID);

    // 모든 서비스 이벤트 처리
    socket.on('event', (data) => handleEvent(io, socket, data));
    // 접속 해제시 이벤트 처리
    socket.on('disconnect', () => handleDisconnect(socket, userUUID));
  });
};

export default registerHandler;