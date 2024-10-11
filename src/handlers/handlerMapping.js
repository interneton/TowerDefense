import { moveStageHandler } from './stage.handler.js';
import { gameEnd, gameStart } from './game.handler.js';
import { purchaseTowerHandler, sellTowerHandler, upgradeTowerHandler } from './tower.handler.js';
import { killMonsterHandler, spawnMonsterHandler } from './monster.handler.js';


const handlerMappings = {
  2: gameStart,
  3: gameEnd,
  11: moveStageHandler,
  21: purchaseTowerHandler,
  22: upgradeTowerHandler,
  23: sellTowerHandler,
  31: spawnMonsterHandler,
  32: killMonsterHandler,
};

export default handlerMappings;