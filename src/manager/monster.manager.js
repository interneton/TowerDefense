import { gameDataClient } from '../utils/prisma/index.js';

const newMonster = await gameDataClient.mosters.create({
    data: {
        userId: validateBody.userId,
        password: hashedPassword,
    },
});