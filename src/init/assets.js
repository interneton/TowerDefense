// gameAssets.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initMonsters } from "../models/monster.model.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, '../../assets');
let gameAssets = {};

const readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(basePath, filename), 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

export const loadGameAssets = async () => {
  try {
    const [initData, monsters] = await Promise.all([
      readFileAsync('startData.json'),
      initMonsters(), // redis에 몬스터 정보 업로드
    ]);
    gameAssets = { initData };
    return gameAssets;
  } catch (error) {
    throw new Error('Failed to load game assets: ' + error.message);
  }
};

export const getGameAssets = () => {
  return gameAssets;
};
