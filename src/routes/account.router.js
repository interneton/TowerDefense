import express from 'express';
import { userDataClient } from '../utils/prisma/index.js';
import bcrypt from 'bcrypt';
import authMiddleware from '../middlewares/auth.middleware.js';
import { createAccessToken, createRefreshToken, validateToken } from '../utils/tokens/tokens.js';
import validSchema from '../utils/joi/valid.schema.js';

const router = express.Router();

/** 사용자 회원가입 API **/
router.post('/account/regist', async (req, res, next) => {
  try {
    const validateBody = await validSchema.account.validateAsync(req.body);

    // 아이디 중복 확인
    const user = await userDataClient.users.findFirst({
      where: {
        userId: validateBody.userId,
      },
    });

    if (user) {
      return res.status(409).json({ message: '이미 존재하는 아이디입니다.' });
    }

    // 사용자 비밀번호를 암호화합니다.
    const hashedPassword = await bcrypt.hash(validateBody.password, 10);

    // Users 테이블에 사용자를 추가합니다.
    const newUser = await userDataClient.users.create({
      data: {
        userId: validateBody.userId,
        password: hashedPassword,
      },
    });

    // Users 인벤토리에 모험가를 하나 추가.
    const initInventory = await userDataClient.inventory.create({
      data: {
        userId: newUser.id,
        towerId: 1,
        level: 1,
        exp: 0,
      },
    });

    return res.status(201).json({
      userId: newUser.userId,
      message: '회원가입이 완료되었습니다.',
    });
  } catch (error) {
    next(error);
  }
});

/** 사용자 로그인 API **/
router.post('/account/login', async (req, res, next) => {
  try {
    const { userId, password } = req.body;
    const { curRefreshToken } = req.headers;
    const user = await userDataClient.users.findFirst({ where: { userId } });

    // 사용자 존재 여부 확인
    if (!user) return res.status(404).json({ message: '아이디를 확인해 주세요' });

    // 입력받은 사용자의 비밀번호와 데이터베이스에 저장된 비밀번호를 비교합니다.
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

    // 로그인에 성공하면 refreshToken과 AccessToken을 발급합니다.
    const refreshToken = createRefreshToken(user.id);
    const accessToken = createAccessToken(user.id);

    return res
      .status(200)
      .json({ message: '로그인 성공', isLogin: true, UUID: user.id, accessToken: accessToken, refreshToken: refreshToken});
  } catch (err) {
    next(err);
  }
});

/** 계정 삭제 */
router.delete('/account', authMiddleware, async (req, res, next) => {
  try {
    console.log(req.user);
    const user = await userDataClient.users.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(404).json({ errorMessage: '유저를 찾을 수 없습니다.' });
    }

    await userDataClient.users.delete({
      where: { id: req.user.id },
    });

    res.clearCookie('refreshToken');

    return res
      .status(201)
      .json({ data: { userId: user.userId, message: '요청한 사용자가 삭제되었습니다.' } });
  } catch (err) {
    next(err);
  }
});

/** 사용자 전체 조회 */
router.get('/account/all', async (req, res, next) => {
  try {
    const users = await userDataClient.users.findMany({
      select: {
        id: true,
        userId: true,
        createdAt: true,
      },
    });

    if (users.length < 0) {
      throw new Error('AccountNotFound');
    }

    return res.status(200).json({ data: users });
  } catch (err) {
    next(err);
  }
});

export default router;
