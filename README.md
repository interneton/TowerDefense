# 7조의 환상적인 타워 디펜스 게임 프로젝트 

## 👥 우리의 영웅들
- 김형구 
- 변우영 
- 이동은 
- 정효상 
- 김현하 
- 임동혁 

## 🌟 게임 소개
타워 디펜스 게임은 전략과 액션이 어우러진 흥미진진한 장르입니다! 
여러분은 강력한 타워들을 맵 곳곳에 배치하여 끊임없이 밀려오는 적들을 물리쳐야 합니다.

우리 팀이 만든 이 특별한 타워 디펜스 게임은 기본에 충실하면서도 
독특하고 재미있는 요소들을 가득 담아 여러분을 기다리고 있습니다!

다음은 `game.js` 파일에 있는 `sendEvent` 함수들에 대한 한국어 문서입니다:

---

### Send Event 함수

## `sendEvent(handlerId, payload)`
- **설명**: 이 함수는 이벤트를 서버로 보내기 위해 사용되며, 사용자 ID, 클라이언트 버전, 핸들러 ID, 그리고 사용자 정의 데이터를 포함한 payload를 전달합니다.
- **매개변수**:
  - `handlerId`: 보내는 이벤트 유형을 식별하는 고유 ID.
  - `payload`: 이벤트에 포함될 사용자 정의 데이터.
- **사용 예시**:
  ```js
  sendEvent(21, { towerInven: towers });
  ```

### Send Event 핸들러 및 전달 데이터

## 1. `sendEvent(2, { timeStamp })` - **게임 시작**
- **핸들러 함수**: `gameStart`
- **위치**: `game.handler.js`
- **전달 데이터**:
  - `timeStamp`: 이벤트 발생 시점의 타임스탬프.
- **설명**: 게임을 초기화하고 타워, 스테이지, 유저의 골드와 같은 데이터를 Redis에 동기화합니다. 초기 게임 상태를 클라이언트로 전송합니다.
- **응답**: 
  - `status`: 게임 시작 성공 여부.
  - `userGold`: 유저의 골드.
  - `baseHp`: 기지 체력.
  - `numOfInitialTowers`: 초기 타워 수.
  - `monsterSpawnInterval`: 몬스터 생성 간격.
  - `stage`: 현재 스테이지.
  - `towers`: 유저의 인벤토리 타워 리스트.
  - `monsters`: 생성된 몬스터 목록.

## 2. `sendEvent(3, {})` - **게임 종료**
- **핸들러 함수**: `gameEnd`
- **위치**: `game.handler.js`
- **전달 데이터**: 없음.
- **설명**: 게임 종료 처리. 유저의 골드와 스테이지를 데이터베이스에 저장하고, Redis에서 캐시 데이터를 제거합니다.
- **응답**:
  - `status`: 게임 종료 성공 여부.

## 3. `sendEvent(11, { timeStamp, currentStage, targetStage })` - **스테이지 이동**
- **핸들러 함수**: `moveStageHandler`
- **위치**: `stage.handler.js`
- **전달 데이터**:
  - `timeStamp`: 스테이지 이동 시점의 타임스탬프.
  - `currentStage`: 현재 스테이지.
  - `targetStage`: 이동할 목표 스테이지.
- **설명**: 다음 스테이지로 이동을 처리하며, 데이터베이스에 스테이지를 업데이트하고 새로운 몬스터를 생성합니다.
- **응답**:
  - `status`: 스테이지 이동 성공 여부.
  - `message`: 스테이지 이동 상태 메시지.
  - `targetStage`: 이동한 스테이지 번호.
  - `monsters`: 새로운 몬스터 목록.

## 4. `sendEvent(21, { towerInven })` - **타워 초기화**
- **핸들러 함수**: `initTowerHandler`
- **위치**: `tower.handler.js`
- **전달 데이터**:
  - `towerInven`: 초기화된 타워 인벤토리 목록.
- **설명**: 유저의 타워를 초기화하고, 이를 데이터베이스의 인벤토리에 저장합니다.
- **응답**:
  - `status`: 타워 초기화 성공 여부.
  - `message`: 타워 초기화 상태 메시지.
  - `inventory`: 초기화된 유저의 인벤토리.

## 5. `sendEvent(22, { towerInven, towerCost })` - **타워 구매**
- **핸들러 함수**: `purchaseTowerHandler`
- **위치**: `tower.handler.js`
- **전달 데이터**:
  - `towerInven`: 구매한 타워 인벤토리 목록.
  - `towerCost`: 구매한 타워의 비용.
- **설명**: 새로운 타워를 구매하는 과정에서 유저의 골드를 차감하고 타워를 인벤토리에 추가합니다.
- **응답**:
  - `status`: 타워 구매 성공 여부.
  - `message`: 타워 구매 상태 메시지.
  - `inventory`: 업데이트된 유저 인벤토리.
  - `gold`: 업데이트된 유저 골드.

## 6. `sendEvent(23, { towerInven, towercost })` - **타워 업그레이드**
- **핸들러 함수**: `upgradeTowerHandler`
- **위치**: `tower.handler.js`
- **전달 데이터**:
  - `towerInven`: 업그레이드된 타워 인벤토리 목록.
  - `towercost`: 업그레이드에 사용된 비용.
- **설명**: 타워를 업그레이드하며, 업그레이드 비용을 차감하고 인벤토리를 갱신합니다.
- **응답**:
  - `status`: 타워 업그레이드 성공 여부.
  - `message`: 타워 업그레이드 상태 메시지.
  - `inventory`: 업데이트된 유저 인벤토리.
  - `gold`: 업데이트된 유저 골드.

## 7. `sendEvent(24, { towerInven, towercost })` - **타워 판매**
- **핸들러 함수**: `sellTowerHandler`
- **위치**: `tower.handler.js`
- **전달 데이터**:
  - `towerInven`: 판매 후 남은 타워 인벤토리 목록.
  - `towercost`: 판매한 타워의 가격.
- **설명**: 타워를 판매하고, 인벤토리와 골드를 업데이트합니다.
- **응답**:
  - `status`: 타워 판매 성공 여부.
  - `message`: 타워 판매 상태 메시지.
  - `inventory`: 업데이트된 인벤토리.
  - `gold`: 업데이트된 유저 골드.

## 8. `sendEvent(31, {})` - **몬스터 생성**
- **핸들러 함수**: `spawnMonsterHandler`
- **위치**: `monster.handler.js`
- **전달 데이터**: 없음.
- **설명**: (아직 구현되지 않음) 몬스터 생성을 처리하기 위한 핸들러.
- **응답**: 현재 `null`을 반환.

## 9. `sendEvent(32, { spawnId })` - **몬스터 처치**
- **핸들러 함수**: `killMonsterHandler`
- **위치**: `monster.handler.js`
- **전달 데이터**:
  - `spawnId`: 처치한 몬스터의 ID.
- **설명**: 몬스터를 처치한 후 게임 상태에서 해당 몬스터를 제거하고, 유저에게 골드를 지급하며 Redis에 남은 몬스터 정보를 갱신합니다.
- **응답**:
  - `message`: 몬스터 처치 성공 메시지.
  - `gold`: 처치 보상으로 얻은 골드.

## 🚀 구현한 도전 기능들
1. **타워 환불 시스템**
2. **특정 타워 업그레이드**
  
  1. 사용자 ID를 이용해 사용자 정보를 가져옵니다.
  2. 사용자의 인벤토리를 전달받은 새로운 타워 인벤토리로 업데이트합니다.
  3. 사용자의 골드에서 업그레이드 비용을 차감합니다.
  4. 업데이트된 골드 정보를 캐시에 저장합니다.
  5. 업데이트된 인벤토리 정보를 캐시에 저장합니다.
  6. 성공 메시지와 함께 응답을 반환합니다.

3. **보물을 가진 고블린 몬스터 등장**

    캐시에 필드에 소환하는 몬스터 리스트를 업로드합니다.
    이 때 stage에 설정된 totalSpawn 양 만큼 몬스터를 리스트에 추가합니다.
    
    마지막으로 spawnGoblin 확률을 가져와서 추가로 확률적으로 황금고블린을 생성 리스트에 추가합니다.

    - **monster.model.js / spawnMonsters() 함수**:
    ```javascript
        if (Math.random() < stageInfo.spawnGoblin / 100) {
            monsters.push({ monster: goldGolin, spawnId: stageInfo,totalSpawn });
        }
    ```