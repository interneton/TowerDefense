import { Base } from './base.js';
import { Monster } from './monster.js';
import { Tower } from './tower.js';
import { CLIENT_VERSION } from './constants.js';

const token = localStorage.getItem('accessToken');
if (!token) {
  alert('플레이 시작을 위해 로그인해주세요.');
  window.location.href = 'login.html';
}

let serverSocket; // 서버 웹소켓 객체
let sendEvent;
let sendEvent2;
let userId;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let isGameEnd = true;

const NUM_OF_MONSTERS = 5; // 몬스터 개수

let userGold = 1000; // 유저 골드
let base; // 기지 객체
let baseHp = 0; // 기지 체력

let towerCost = 0; // 타워 구입 비용
let numOfInitialTowers = 0; // 초기 타워 개수
let monsterLevel = 0; // 몬스터 레벨
let monsterSpawnInterval = 0; // 몬스터 생성 주기
let spawnMonsters = [] // 몬스터 생성 리스트
const monsters = [];
const towers = [];
const towersData = [];

let score = 0; // 게임 점수
let highScore = 0; // 기존 최고 점수
let isInitGame = false;

// 이미지 로딩 파트
const backgroundImage = new Image();
backgroundImage.src = 'images/bg.webp';

const towerImage = new Image();
towerImage.src = 'images/tower.png';

const baseImage = new Image();
baseImage.src = 'images/base.png';

const pathImage = new Image();
pathImage.src = 'images/path.png';

const towerPlaceholderImage = new Image();
towerPlaceholderImage.src = 'images/mousePoint.png';

const monsterImages = [];
for (let i = 1; i <= NUM_OF_MONSTERS; i++) {
  const img = new Image();
  img.src = `images/monster${i}.png`;
  monsterImages.push(img);
}

let monsterPath;

function generateRandomMonsterPath() {
  const path = [];
  let currentX = 0;
  let currentY = Math.floor(Math.random() * 21) + 500; // 500 ~ 520 범위의 y 시작 (캔버스 y축 중간쯤에서 시작할 수 있도록 유도)

  path.push({ x: currentX, y: currentY });

  while (currentX < canvas.width) {
    currentX += Math.floor(Math.random() * 100) + 50; // 50 ~ 150 범위의 x 증가
    // x 좌표에 대한 clamp 처리
    if (currentX > canvas.width) {
      currentX = canvas.width;
    }

    currentY += Math.floor(Math.random() * 200) - 100; // -100 ~ 100 범위의 y 변경
    // y 좌표에 대한 clamp 처리
    if (currentY < 0) {
      currentY = 0;
    }
    if (currentY > canvas.height) {
      currentY = canvas.height;
    }

    path.push({ x: currentX, y: currentY });
  }

  return path;
}

function initMap() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // 배경 이미지 그리기
  drawPath();
}

function drawPath() {
  const segmentLength = 20; // 몬스터 경로 세그먼트 길이
  const imageWidth = 60; // 몬스터 경로 이미지 너비
  const imageHeight = 60; // 몬스터 경로 이미지 높이
  const gap = 5; // 몬스터 경로 이미지 겹침 방지를 위한 간격

  for (let i = 0; i < monsterPath.length - 1; i++) {
    const startX = monsterPath[i].x;
    const startY = monsterPath[i].y;
    const endX = monsterPath[i + 1].x;
    const endY = monsterPath[i + 1].y;

    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // 피타고라스 정리로 두 점 사이의 거리를 구함 (유클리드 거리)
    const angle = Math.atan2(deltaY, deltaX); // 두 점 사이의 각도는 tan-1(y/x)로 구해야 함 (자세한 것은 역삼각함수 참고): 삼각함수는 변의 비율! 역삼각함수는 각도를 구하는 것!

    for (let j = gap; j < distance - gap; j += segmentLength) {
      // 사실 이거는 삼각함수에 대한 기본적인 이해도가 있으면 충분히 이해하실 수 있습니다.
      // 자세한 것은 https://thirdspacelearning.com/gcse-maths/geometry-and-measure/sin-cos-tan-graphs/ 참고 부탁해요!
      const x = startX + Math.cos(angle) * j; // 다음 이미지 x좌표 계산(각도의 코사인 값은 x축 방향의 단위 벡터 * j를 곱하여 경로를 따라 이동한 x축 좌표를 구함)
      const y = startY + Math.sin(angle) * j; // 다음 이미지 y좌표 계산(각도의 사인 값은 y축 방향의 단위 벡터 * j를 곱하여 경로를 따라 이동한 y축 좌표를 구함)
      drawRotatedImage(pathImage, x, y, imageWidth, imageHeight, angle);
    }
  }
}

function drawRotatedImage(image, x, y, width, height, angle) {
  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(angle);
  ctx.drawImage(image, -width / 2, -height / 2, width, height);
  ctx.restore();
}

function getRandomPositionNearPath(maxDistance) {
  // 타워 배치를 위한 몬스터가 지나가는 경로 상에서 maxDistance 범위 내에서 랜덤한 위치를 반환하는 함수!
  const segmentIndex = Math.floor(Math.random() * (monsterPath.length - 1));
  const startX = monsterPath[segmentIndex].x;
  const startY = monsterPath[segmentIndex].y;
  const endX = monsterPath[segmentIndex + 1].x;
  const endY = monsterPath[segmentIndex + 1].y;

  const t = Math.random();
  const posX = startX + t * (endX - startX);
  const posY = startY + t * (endY - startY);

  const offsetX = (Math.random() - 0.5) * 2 * maxDistance;
  const offsetY = (Math.random() - 0.5) * 2 * maxDistance;

  return {
    x: posX + offsetX,
    y: posY + offsetY,
  };
}

function placeInitialTowers() {
  sendEvent2(21, null).then((data) => {
    console.log(data);
  });
  let baseTower = getTower("모험가 타워");

  for (let i = 0; i < numOfInitialTowers; i++) {
    const { x, y } = getRandomPositionNearPath(200);
    const tower = new Tower(x, y, baseTower.damage, baseTower.attackRange, baseTower.attackSpeed, baseTower.cost, 1);
    towers.push(tower);
    tower.draw(ctx, towerImage);
  }
  updateTowerInventory();
}

function placeBase() {
  const lastPoint = monsterPath[monsterPath.length - 1];
  base = new Base(lastPoint.x, lastPoint.y, baseHp);
  base.draw(ctx, baseImage);
}

function spawnMonster() {
  if(!spawnMonsters.length) return;
  const {monster, spawnId} = spawnMonsters.shift()
  monsters.push(new Monster(monsterPath, monsterImages, monster.hp, monster.attack, monster.level, spawnId));
}

function gameLoop() {
  // 렌더링 시에는 항상 배경 이미지부터 그려야 합니다! 그래야 다른 이미지들이 배경 이미지 위에 그려져요!
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // 배경 이미지 다시 그리기
  drawPath(monsterPath); // 경로 다시 그리기

  ctx.font = '25px Times New Roman';
  ctx.fillStyle = 'skyblue';
  ctx.fillText(`최고 기록: ${highScore}`, 100, 50); // 최고 기록 표시
  ctx.fillStyle = 'white';
  ctx.fillText(`점수: ${score}`, 100, 100); // 현재 스코어 표시
  ctx.fillStyle = 'yellow';
  ctx.fillText(`골드: ${userGold}`, 100, 150); // 골드 표시
  ctx.fillStyle = 'black';
  ctx.fillText(`현재 레벨: ${monsterLevel}`, 100, 200); // 최고 기록 표시

  // 타워 그리기 및 몬스터 공격 처리
  towers.forEach((tower) => {
    tower.draw(ctx, towerImage);
    tower.updateCooldown();
    monsters.forEach((monster) => {
      const distance = Math.sqrt(
        Math.pow(tower.x - monster.x, 2) + Math.pow(tower.y - monster.y, 2),
      );
      if (distance < tower.range) {
        tower.attack(monster);
      }
    });
  });

  // 몬스터가 공격을 했을 수 있으므로 기지 다시 그리기
  base.draw(ctx, baseImage);

  for (let i = monsters.length - 1; i >= 0; i--) {
    const monster = monsters[i];
    if (monster.hp > 0) {
      const isDestroyed = monster.move(base);
      if (isDestroyed && isGameEnd) {
        /* 게임 오버 */
        isGameEnd = false;
        alert('게임 오버. 스파르타 본부를 지키지 못했다...ㅠㅠ');
        location.reload();
      }
      monster.draw(ctx);
    } else {
      /* 몬스터가 죽었을 때 */
      console.log("처치 : " + monster.id)
      sendEvent(32, {spawnId : monster.id})
      monsters.splice(i, 1);
    }
  }

  // 게임 클리어
  if(!spawnMonsters.length && !monsters.length && isGameEnd){
    isGameEnd = false;
    if (window.confirm('스테이지 클리어!?'))
      {
        location.reload();
      }
      else
      {
        location.href = 'index.html';
      }
  }

  if (selectedTowerPosition) {
    drawTowerPlaceholder(selectedTowerPosition.x, selectedTowerPosition.y);
  }

  requestAnimationFrame(gameLoop); // 지속적으로 다음 프레임에 gameLoop 함수 호출할 수 있도록 함
}

function initGame() {
  if (isInitGame) {
    return;
  }

  monsterPath = generateRandomMonsterPath(); // 몬스터 경로 생성
  initMap(); // 맵 초기화 (배경, 몬스터 경로 그리기)
  placeInitialTowers(); // 설정된 초기 타워 개수만큼 사전에 타워 배치
  placeBase(); // 기지 배치

  setInterval(spawnMonster, monsterSpawnInterval); // 설정된 몬스터 생성 주기마다 몬스터 생성
  gameLoop(); // 게임 루프 최초 실행
  isInitGame = true;
}

// 이미지 로딩 완료 후 서버와 연결하고 게임 초기화
Promise.all([
  new Promise((resolve) => (backgroundImage.onload = resolve)),
  new Promise((resolve) => (towerImage.onload = resolve)),
  new Promise((resolve) => (baseImage.onload = resolve)),
  new Promise((resolve) => (pathImage.onload = resolve)),
  new Promise((resolve) => (towerPlaceholderImage.onload = resolve)),
  ...monsterImages.map((img) => new Promise((resolve) => (img.onload = resolve))),
]).then(() => {
  /* 서버 접속 코드 (여기도 완성해주세요!) */
  serverSocket = io('http://localhost:3000', {
    query: {
      clientVersion: CLIENT_VERSION,
    },
    auth: {
      token: token, // 토큰이 저장된 어딘가에서 가져와야 합니다!
      refreshToken: localStorage.getItem('refreshToken'),
    },
  });

  /* 
    서버의 이벤트들을 받는 코드들은 여기다가 쭉 작성해주시면 됩니다! 
    e.g. serverSocket.on("...", () => {...});
    이 때, 상태 동기화 이벤트의 경우에 아래의 코드를 마지막에 넣어주세요! 최초의 상태 동기화 이후에 게임을 초기화해야 하기 때문입니다! 
    if (!isInitGame) {
      initGame();
    }
  */

  serverSocket.on('response', (data) => {
    console.log(data);
  });

  serverSocket.on('connection', async (data) => {
    console.log('서버와 연결되었습니다', data);
    userId = data.uuid;
    sendEvent(2, { timeStamp: Date.now() });
  });

  //connect에서 검증에 이상이 있을 경우 작동
  serverSocket.on('stop', async (data) => {
    console.log('서버에 문제 발생', data);
    alert(data.message);
    // 강제 로그아웃 -> 토큰 몰수
    localStorage.clear();
    window.location.href = 'login.html';
  });

  serverSocket.on('gameStart', (data) => {
    if (data.status === 'success') {
      userGold = data.userGold;
      baseHp = data.baseHp;
      numOfInitialTowers = data.numOfInitialTowers;
      monsterSpawnInterval = data.monsterSpawnInterval;
      spawnMonsters = data.monsters;
      console.log(spawnMonsters)

      console.log(userGold);
      if (!isInitGame) {
        initGame();
      }
    } else {
      alert('게임 초기 정보 검증에 실패했습니다.');
    }
  });

  serverSocket.on('allTowersData', (data) => {
    data.forEach((ele) => {
      towersData.push(ele);
    });

    let baseTower = getTower("모험가 타워");
    towerCost = baseTower.cost;

    buyTowerButton.textContent = `타워 구입${towerCost}`;
  });

    sendEvent = (handlerId, payload) => {
      serverSocket.emit('event', {
        userId,
        clientVersion: CLIENT_VERSION,
        handlerId,
        payload,
      });
    };

    sendEvent2 = async (handlerId, payload) => {
      return new Promise((resolve, reject) => {
        // 이벤트를 서버로 전송
        serverSocket.emit('event', {
          userId, // 사용자 ID
          clientVersion: CLIENT_VERSION, // 클라이언트 버전
          handlerId, // 핸들러 ID
          payload, // 추가 데이터
        });
        // 서버로부터 응답을 받으면 Promise를 해결
        serverSocket.on('response', (response) => {
          resolve(response);
        });
      });
    }    
});
    export { sendEvent };

let selectedTowerPosition = null;

const buyTowerButton = document.createElement('button');
buyTowerButton.textContent = `타워 구입`;
buyTowerButton.style.position = 'absolute';
buyTowerButton.style.top = '10px';
buyTowerButton.style.right = '10px';
buyTowerButton.style.padding = '10px 20px';
buyTowerButton.style.fontSize = '16px';
buyTowerButton.style.cursor = 'pointer';
buyTowerButton.disabled = true;

buyTowerButton.addEventListener('click', () => {
  if (selectedTowerPosition) {

    if(userGold < towerCost)
    {
      alert(`${towerCost - userGold} 금액이 부족합니다`);
      return;
    }
      
    placeNewTower(selectedTowerPosition);

    buyTowerButton.disabled = true;
    clearPreviousTower();
  } else {
    alert('타워를 배치할 위치를 먼저 선택해주세요!');
  }
});

document.body.appendChild(buyTowerButton);

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const existingTower = getTowerAtPosition(x, y);
  if (existingTower) {
    alert(`\n타워 정보: ${existingTower.name}\n데미지: ${existingTower.damage}\n공격 속도: ${existingTower.attackSpeed}\n사거리: ${existingTower.attackRange}\n`);
  }
  else
  {    
    clearPreviousTower();    
    selectedTowerPosition = { x, y };    
    drawTowerPlaceholder(x, y);    
    buyTowerButton.disabled = false;
  }
});

function getTowerAtPosition(x, y) {
  const towerWidth = 78;
  const towerHeight = 150;

  for (let i = 0; i < towers.length; i++) {
    const tower = towers[i];

    const isWithinX = x >= tower.x && x <= (tower.x + towerWidth);
    const isWithinY = y >= tower.y && y <= (tower.y + towerHeight);

    if (isWithinX && isWithinY) {
      return tower;
    }
  }

  return null;
}

function drawTowerPlaceholder(x, y) {
  const towerWidth = 100;
  const towerHeight = 100;

  ctx.drawImage(
    towerPlaceholderImage,
    x - towerWidth / 2,
    y - towerHeight / 2,
    towerWidth,
    towerHeight,
  );
}

function clearPreviousTower() {
  if (selectedTowerPosition) {
    const { x, y } = selectedTowerPosition;
    const towerWidth = 50;
    const towerHeight = 50;

    // Clear only the area where the previous tower was drawn
    ctx.clearRect(x - towerWidth / 2, y - towerHeight / 2, towerWidth, towerHeight);
  }
}

function placeNewTower(position) {
  if (!position) {
    alert('타워를 배치할 위치를 선택해주세요.');
    return;
  }

  const towerWidth = 78;
  const towerHeight = 150;
  const { x, y } = position;

  const centerX = x - towerWidth / 2;
  const centerY = y - towerHeight / 2;

  let baseTower = getTower("모험가 타워"); 

  const tower = new Tower(centerX, centerY, baseTower.damage, baseTower.attackRange, baseTower.attackSpeed, baseTower.cost, 1);
  towers.push(tower);
  tower.draw(ctx, towerImage);

  selectedTowerPosition = null;
  buyTowerButton.disabled = true;

  sendEvent(22, { towerId: baseTower.id, towerLevel: 1 });
  updateTowerInventory();
}

function getTower(towerName) {
  let currentTower = towersData.find((data) => data.name === towerName);

  if (!currentTower) alert('타워 정보가 없습니다!');

  return towersData.find((data) => data.name === towerName);
}

// 타워 인벤토리 생성
const towerInventory = document.createElement("div");
towerInventory.id = "towerInventory";
towerInventory.style.position = "absolute";
towerInventory.style.top = "60px";
towerInventory.style.right = "10px";
towerInventory.style.width = "200px";
towerInventory.style.padding = "10px";
towerInventory.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
towerInventory.style.border = "1px solid black";

document.body.appendChild(towerInventory);

// 타워 인벤토리 업데이트 함수
function updateTowerInventory() {
  towerInventory.innerHTML = "<h3>타워 인벤토리</h3>";
  towers.forEach((tower, index) => {
    const towerElement = document.createElement("div");
    towerElement.innerHTML = `타워 ${index + 1} - 레벨: ${tower.level}`;
    
    const upgradeButton = document.createElement("button");
    upgradeButton.textContent = "강화";
    upgradeButton.addEventListener("click", () => upgradeTower(tower));
    
    towerElement.appendChild(upgradeButton);
    towerInventory.appendChild(towerElement);
  });
}

// 타워 강화 함수
function upgradeTower(tower) {
  if (10000 >= tower.upgradeCost) {
    sendEvent2(23, { towerId: tower.id, level: tower.level, gold: userGold, exp: tower.exp })
      .then(resolve => {
        console.log(resolve);
        if (resolve.status === 'success') {
          userGold -= tower.upgradeCost;
          tower.level++;
          tower.upgradeCost = Math.floor(tower.upgradeCost * 1.5);
          tower.damage = Math.floor(tower.damage * 1.2);
          console.log("타워가 성공적으로 강화되었습니다.");
          updateTowerInventory();
        } else {
          console.log("타워 강화에 실패했습니다.");
        }
      })
      .catch(error => {
        console.log("업그레이드 중 오류 발생: " + error);
      });
  } else {
    console.log("골드가 부족합니다!");
  }
}

